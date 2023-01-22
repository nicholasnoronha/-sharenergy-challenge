import HttpCatController from "../controllers/HttpCatController";
import Router from "express";
const httpCatRouter = Router();

httpCatRouter.get("/:status", HttpCatController.getStatus);

export default httpCatRouter;
