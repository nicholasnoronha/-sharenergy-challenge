import { Router } from "express";
import userRouter from "./userRoutes";

const routes = Router();

routes.use("/user", userRouter);

export default routes;
