import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  validate,
} from "../controllers/userController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";


const userRoute = express.Router();




userRoute.post("/create", createUser);
userRoute.get("/get", getUsers);
userRoute.delete("/delete/:id", verifyTokenMiddleware ,deleteUser);
userRoute.put("/update/:id", verifyTokenMiddleware, updateUser);
userRoute.post("/login", validate)

export default userRoute;
