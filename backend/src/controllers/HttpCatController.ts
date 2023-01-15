import { AxiosError } from "axios";
import { Request, Response } from "express";
import HttpCatService from "../services/HttpCatService";

class HttpCatController {
  static async getStatus(req: Request, res: Response) {
    try {
      const response = await HttpCatService.getStatusImage(404);

      return res.send(response);
    } catch (err: unknown) {
      const error = err as AxiosError;

      return res.status(500).json(error.message);
    }
  }
}

export default HttpCatController;
