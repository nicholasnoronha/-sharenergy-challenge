import ClientController from "../controllers/ClientController";
import Router from "express";
const clientRouter = Router();

clientRouter.get("", ClientController.getClients);
clientRouter.get("/:id", ClientController.getClient);
clientRouter.post("/add", ClientController.addClient);
clientRouter.put("/edit/:id", ClientController.updateClient);
clientRouter.delete("/delete/:id", ClientController.deleteClient);

export default clientRouter;
