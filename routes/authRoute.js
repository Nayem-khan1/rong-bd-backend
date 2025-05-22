import express from "express";
import { adminLogin, loginUser, registerUser } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.post('/admin', adminLogin)

export default authRouter;