import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Adding new food Item Route
foodRouter.post("/add", upload.single("image"), addFood);

// list All food items Route
foodRouter.get("/list", listFood);

// Remove Food Item Route
foodRouter.post("/remove", removeFood);

export default foodRouter;
