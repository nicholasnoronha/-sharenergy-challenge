import RandomDogController from "../controllers/RandomDogController";
import Router from "express";
const randomDogRouter = Router();

randomDogRouter.get("", RandomDogController.getRandomDog);

export default randomDogRouter;
