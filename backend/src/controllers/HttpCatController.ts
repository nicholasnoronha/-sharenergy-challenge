import { Request, Response } from "express";
import HttpCatService from "../services/HttpCatService";

class HttpCatController {
  static async getStatus(req: Request, res: Response) {
    try {
      const response = await HttpCatService.getStatus(404);
      res.send(response); //base64 cat img - 'data:image/jpg;base64'
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default HttpCatController;
