import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://lakshmankumarsanaboyina146:Lakshmankumar@cluster0.wd3rrbm.mongodb.net/food-del"
    )
    .then(() => console.log("Data Base Connnected"));
};
