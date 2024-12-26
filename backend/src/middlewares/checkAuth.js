import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

export const validate_user = async (req, res, next) => {
  try {
    const token = req.Cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - no token found" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decode) {
      return res.status(401).json({ message: "Unauthorized - invalid token" });
    }
    
    const user = await User.findOne({Email:decode.user_email})
    
    if (!user) {
        return res.status(404).json({ message: "user not found" });
        
    }
    req.user = user

    next()
  } catch (error) {}
};
