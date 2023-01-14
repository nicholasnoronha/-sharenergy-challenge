import ClientController from "../controllers/ClientController";
import Router from "express";
const clientRouter = Router();

clientRouter.get("/add", ClientController.addClient);

export default clientRouter;
