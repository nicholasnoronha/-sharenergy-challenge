import { ClientModel } from "../models/client";
import { Request, Response } from "express";
import { Client } from "../interfaces/Client";

class ClientController {
  static async addClient(req: Request, res: Response) {
    const { name, email, phone, address, cpf } = req.body;
    const clientToAdd: Client = { name, email, phone, address, cpf };

    try {
      const client = new ClientModel(clientToAdd);

      await client.save();

      return res.status(201).send("Cliente adicionado com sucesso");
    } catch (err: unknown) {
      const error = err as Error;

      return res.status(500).json({ error: error.message });
    }
  }
}

export default ClientController;
