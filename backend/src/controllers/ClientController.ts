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

      return res.status(201).send("Cliente adicionado com sucesso.");
    } catch (err: unknown) {
      const error = err as Error;

      return res.status(500).json({ error: error.message });
    }
  }

  static async getClient(req: Request, res: Response) {
    const clientId = req.params.id;

    try {
      const client = await ClientModel.findOne({ _id: clientId });

      if (!client) throw new Error("Cliente não encontrado.");

      return res.status(200).send({ client });
    } catch (err: unknown) {
      const error = err as Error;

      if (error.message.includes("encontrado"))
        return res.status(406).json({ error: error.message });

      if (error.message.includes("_id"))
        return res.status(400).json({ error: "Id inválido." });

      return res.status(500).json({ error: error.message });
    }
  }

  static async getClients(req: Request, res: Response) {
    try {
      const clients = await ClientModel.find();

      return res.status(200).send({ clients });
    } catch (err: unknown) {
      const error = err as Error;

      return res.status(500).json({ error: error.message });
    }
  }

  static async updateClient(req: Request, res: Response) {
    const { name, email, phone, address, cpf } = req.body;
    const clientId = req.params.id;
    const clientToUpdate: Client = { name, email, phone, address, cpf };

    try {
      await ClientModel.findOneAndUpdate({ _id: clientId }, clientToUpdate);

      return res.status(201).send("Cliente atualizado com sucesso");
    } catch (err: unknown) {
      const error = err as Error;

      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteClient(req: Request, res: Response) {
    const clientId = req.params.id;

    try {
      const response = await ClientModel.deleteOne({ _id: clientId });

      if (response.deletedCount === 0)
        return res.status(400).send("Cliente não encontrado.");

      return res.status(200).send("Cliente excluído com sucesso.");
    } catch (err: unknown) {
      const error = err as Error;

      if (error.message.includes("encontrado"))
        return res.status(406).json({ error: error.message });

      if (error.message.includes("_id"))
        return res.status(400).json({ error: "Id inválido." });

      return res.status(500).json({ error: error.message });
    }
  }
}

export default ClientController;
