import express from "express";
import { deleteUser, getAllUsers, updateUserRole } from "../controllers/userController.js";
import adminAuth from "../middleware/adminAuth.js";

const userRouter = express.Router();

userRouter.get("/", adminAuth, getAllUsers);
userRouter.delete("/:id", adminAuth, deleteUser);
userRouter.put("/:id/role", adminAuth, updateUserRole);

export default userRouter;