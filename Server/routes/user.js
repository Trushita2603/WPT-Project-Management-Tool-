import express from "express";
import { getRegisteredUsers } from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.get('/all-users',verifyToken, getRegisteredUsers);
export default userRouter;