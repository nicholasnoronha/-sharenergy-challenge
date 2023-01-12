import { Request, Response } from "express";
import httpCatService from "../services/httpCatService";

class HttpCatController {
  static async getStatus(req: Request, res: Response) {
    try {
      const response = await httpCatService.getStatus(404);
      res.send(response); //base64 cat img - 'data:image/jpg;base64'
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default HttpCatController;
