import { authorizeUser, changePassword, forgotPassword, verifyToken } from "@/controllers/login";
import express from "express";

const loginRouter = express.Router();

loginRouter.post("/auth/login", authorizeUser);
loginRouter.put("/auth/forgot-password", forgotPassword);
loginRouter.get("/auth/verify-token", verifyToken);
loginRouter.get("/auth/change-password", changePassword);

export default loginRouter; 