import { AxiosError } from "axios";
import { Request, Response } from "express";
import { Result } from "../interfaces/RandomUserGeneratorResponse";
import RandomUserGeneratorService from "../services/RandomUserGeneratorService";
import { paginatedResults } from "../utils/paginatedResults";

class RandomUserGeneratorController {
  static async getRandomUserGeneratorData(req: Request, res: Response) {
    // const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    try {
      const response: Result[] =
        await RandomUserGeneratorService.getRandomUsers(limit);

      // const results = paginatedResults(page, limit, response);

      return res.status(201).send(response);
    } catch (err: unknown) {
      const error = err as AxiosError;

      return res.status(500).json(error.message);
    }
  }
}

export default RandomUserGeneratorController;
