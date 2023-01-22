import UserController from "../controllers/UserController";
import Router from "express";
const userRouter = Router();

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);

export default userRouter;
