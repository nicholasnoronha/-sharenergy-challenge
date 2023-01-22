import { AxiosError } from "axios";
import { Request, Response } from "express";
import RandomDogService from "../services/RandomDogService";

class RandomDogController {
  static async getRandomDog(req: Request, res: Response) {
    try {
      const response = await RandomDogService.getUrl();

      return res.send(response);
    } catch (err: unknown) {
      const error = err as AxiosError;

      return res.status(500).json({ error: error.message });
    }
  }
}

export default RandomDogController;
