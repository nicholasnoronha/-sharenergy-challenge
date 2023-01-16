import { Router } from "express";
import userRouter from "./userRoutes";
import randomUserGeneratorRouter from "./randomUserGeneratorRoutes";
import httpCatRouter from "./httpCatRoutes";
import randomDogRouter from "./randomDogRoutes";
import clientRouter from "./clientRoutes";

const routes = Router();

routes.use("", userRouter);
routes.use("/random-user-generator", randomUserGeneratorRouter);
routes.use("/cat", httpCatRouter);
routes.use("/dog", randomDogRouter);
routes.use("/client", clientRouter);

export default routes;
