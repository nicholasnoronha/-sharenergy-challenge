import { AxiosError } from "axios";
import { Request, Response } from "express";
import HttpCatService from "../services/HttpCatService";

class HttpCatController {
  static async getStatus(req: Request, res: Response) {
    try {
      const response = await HttpCatService.getStatusImage(404);
      res.send(response); //base64 cat img - 'data:image/jpg;base64'
    } catch (err) {
      const error = err as AxiosError;
      res.status(500).json(error.message);
    }
  }
}

export default HttpCatController;
