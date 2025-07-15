import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// import ".dotenv/config.js"; // dotenv
// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB connection

connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images/", express.static("uploads"));

// New Users or Register Users
app.use("/api/user", userRouter);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRouter);

app.get("/", async (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`server is Runnig at http://localhost:${port}`);
});

// mongodb+srv://lakshmankumarsanaboyina146:Lakshmankumar@cluster0.wd3rrbm.mongodb.net/?
