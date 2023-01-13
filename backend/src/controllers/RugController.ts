import { AxiosError } from "axios";
import { Request, Response } from "express";
import { Result } from "../interfaces/RugResponse";
import RugService from "../services/RugService";
import { paginatedResults } from "../utils/paginatedResults";

class RugController {
  static async getRandomUserGeneratorData(req: Request, res: Response) {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    try {
      const response: Result[] = await RugService.getRandomUsers(100);

      const results = paginatedResults(page, limit, response);

      return res.status(201).send({ users: results });
    } catch (err) {
      const error = err as AxiosError;

      return res.status(500).json(error.message);
    }
  }
}

export default RugController;
