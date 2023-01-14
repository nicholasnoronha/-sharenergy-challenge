import { Router } from "express";
import userRouter from "./userRoutes";
import rugRouter from "./rugRoutes";
import httpCatRouter from "./httpCatRoutes";
import randomDogRouter from "./randomDogRoutes";
import clientRouter from "./clientRoutes";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/rug", rugRouter);
routes.use("/cat", httpCatRouter);
routes.use("/dog", randomDogRouter);
routes.use("/client", clientRouter);

export default routes;
