import { Request, Response, NextFunction } from "express";
import rugService from "../services/rugService";

class RugController {
  static async getRandomUserGeneratorData(req: Request, res: Response) {
    try {
      const response = await rugService.getRandomUsers(5);

      res.status(201).send({ users: response });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default RugController;
