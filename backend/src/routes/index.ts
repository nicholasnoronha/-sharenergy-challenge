import { Router } from "express";
import userRouter from "./userRoutes";
import rugRouter from "./rugRoutes";
import httpCatRouter from "./httpCatRoutes";
import randomDogRouter from "./randomDogRoutes";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/rug", rugRouter);
routes.use("/cat", httpCatRouter);
routes.use("/dog", randomDogRouter);

export default routes;
