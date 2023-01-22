import { AxiosError } from "axios";
import { Request, Response } from "express";
import HttpCatService from "../services/HttpCatService";

class HttpCatController {
  static async getStatus(req: Request, res: Response) {
    const statueSelectedFromClient = req.params.status;
    try {
      const response = await HttpCatService.getStatusImage(
        statueSelectedFromClient
      );

      return res.send(response);
    } catch (err: unknown) {
      const error = err as AxiosError;

      return res.status(500).json(error.message);
    }
  }
}

export default HttpCatController;
