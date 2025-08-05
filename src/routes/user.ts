import { createUser, deleteUserBiId, getUserBiId, getUsers, updateUserBiId, updateUserPasswordBiId } from "@/controllers/users";
import express from "express"; // Import the Express framework

const userRouter = express.Router();

userRouter.post("/users", createUser);
userRouter.get("/users", getUsers);
userRouter.get("/users/:id", getUserBiId);
userRouter.put("/users/:id", updateUserBiId);
userRouter.put("/users/update-password/:id", updateUserPasswordBiId);
userRouter.delete("/users/:id", deleteUserBiId);

export default userRouter;    