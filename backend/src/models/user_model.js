import mongoose from "mongoose";

const user_schema = new mongoose.Schema(
  {
    Username: {
      type: String,
      required: true,
      unique: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      minlength: 8,
    },
    ProfilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", user_schema);

export default User;