import { Request, Response } from "express";
import { Result } from "../interfaces/RugResponse";
import rugService from "../services/rugService";
import { paginatedResults } from "../utils/paginatedResults";

class RugController {
  static async getRandomUserGeneratorData(req: Request, res: Response) {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    try {
      const response: Result[] = await rugService.getRandomUsers(100);

      const results = paginatedResults(page, limit, response);

      res.status(201).send({ users: results });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default RugController;
