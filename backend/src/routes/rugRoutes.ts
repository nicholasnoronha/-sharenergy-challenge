import RugController from "../controllers/RugController";
import Router from "express";
const rugRouter = Router();

rugRouter.get("/users", RugController.getRandomUserGeneratorData);

export default rugRouter;