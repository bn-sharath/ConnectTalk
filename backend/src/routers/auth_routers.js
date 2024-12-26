import express from "express";
import {signup, login, logout, Update_profile} from "../controllers/auth_controllers.js"
import { validate_user } from "../middlewares/checkAuth.js";

const Backend_router = express.Router();

Backend_router.post("/signup", signup);

Backend_router.post("/login", login);

Backend_router.post("/logout", logout);

Backend_router.put("/update-profile", validate_user ,Update_profile);

export default Backend_router;