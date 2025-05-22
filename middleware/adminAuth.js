import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(token_decode.id);

    if (!user || user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Not Authorized (Admin only)" });
    }
    
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;