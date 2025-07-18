import dotenv from "dotenv";
dotenv.config();
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import validator from "validator"; // validator

// Login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't Exits" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Password is Incorrect" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `Error` });
  }
};

// Token Creation

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Register user;

const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const exists = await userModel.findOne({ email });

    if (exists) {
      return res.json({ success: false, message: "User Already Exits" });
    }
    // Validation email format and Strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter Valid Email",
      });
    }

    //check password length and string
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter Strong Password",
      });
    }

    // Hasshing user Password

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

export { loginUser, registerUser };
