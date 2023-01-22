import RandomUserGeneratorController from "../controllers/RandomUserGeneratorController";
import Router from "express";
const randomUserGeneratorRouter = Router();

randomUserGeneratorRouter.get(
  "/users",
  RandomUserGeneratorController.getRandomUserGeneratorData
);

export default randomUserGeneratorRouter;
