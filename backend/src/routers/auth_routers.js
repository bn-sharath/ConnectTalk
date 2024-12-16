import express from "express";
import {signup, login, logout} from "../controllers/auth_controllers.js"

const Backend_router = express.Router();

Backend_router.get("/signup", signup);

Backend_router.get("/login", login);

Backend_router.get("/logout", logout);


export default Backend_router;