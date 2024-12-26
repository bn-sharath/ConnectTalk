import bcrypt from "bcryptjs";
import User from "../models/user_model.js";
import { generate_token } from "../lib/gentoken.js";

export const signup = async (req, res) => {
  const { email, name, password } = req.body;

  // checking input fields are empty are not
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // checking password length is more than 8
  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "password must be at least 8 characters" });
  }
  try {
    const user = await User.findOne({ Email:email });
    
    if (user) {
      console.log("entered the if")
      return res.status(400).json({ message: "email is already exist" });
    }else{
    const hashedpassword = await bcrypt.hash(password, 10);

    const new_user = new User({
      Name: name,
      Email: email,
      Password: hashedpassword,
    });

    generate_token(new_user.Email, res);
    await new_user.save();

    return res.status(201).json({ user: new_user });
  }
  } catch (error) {
    return res.status(500).json({ message: "error sign up controller", error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne( { Email:email });
    
    if (!user) {
      console.log("user if enter")
      return res.status(400).json({ message: "Invalid credentials" });
    }
    
    const isPasswordCorrect = await bcrypt.compare(password, user.Password);
    if (!isPasswordCorrect) {
      console.log("password if enter")
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generate_token(user.Email, res);

    res.status(200).json({
      user: user,
    });
  } catch (error) {
    return res.status(500).json({ message: "error in login controller", error });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const Update_profile = async (req,res)=>{

}
