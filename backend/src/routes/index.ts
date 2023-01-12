import { Router } from "express";
import userRouter from "./userRoutes";
import rugRouter from "./rugRoutes";
import httpCatRouter from "./httpCatRoutes";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/rug", rugRouter);
routes.use("/cat", httpCatRouter);

export default routes;
