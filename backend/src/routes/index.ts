import { Router } from "express";
import userRouter from "./userRoutes";
import rugRouter from "./rugRoutes";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/rug", rugRouter);

export default routes;
