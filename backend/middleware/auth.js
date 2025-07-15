import jwt from "jsonwebtoken"

const authMiddleware = async(req,res,next)=>{
    const {token} =req.headers;
    if(!token){
        return res.json({success:false,message:"not authorised user"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

export default authMiddleware;

/*
const authMiddleware = async (req, res, next) => {
  // const { token } = req.headers;
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);

  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }

  try {
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token_decoded);
    req.body = req.body || {}; // Initialize if undefined
    //req.user = { id: token_decoded.id }; // Standard practice

    req.body.userId = token_decoded.id;
    console.log(req.body.userId);

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
*/