import HttpCatController from "../controllers/HttpCatController";
import Router from "express";
const httpCatRouter = Router();

httpCatRouter.get("/", HttpCatController.getStatus);

export default httpCatRouter;
