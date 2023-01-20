import { AxiosError } from "axios";
import { UserModel } from "../models/user";
import { Request, Response } from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

interface SignInRequest extends Request {
  body: { username: string; password: string };
}

class UserController {
  static comparePassword(password: string, hashedPassword: string): void {
    const isPasswordValid = bcrypt.compareSync(password, hashedPassword);

    if (!isPasswordValid) throw new Error("Invalid password");
  }

  static generateToken(userId: string): string {
    const paramsToAssignToToken = { userId };

    const jwtSignOptions = { expiresIn: "7d" };

    if (!JWT_SECRET) throw new Error("JWT_SECRET_NOT_FOUND");

    return jwt.sign(paramsToAssignToToken, JWT_SECRET, jwtSignOptions);
  }

  static async register(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      if (!username) throw new Error("Usuário não informado.");
      if (!password) throw new Error("Senha não informada.");

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new UserModel({
        username,
        hashedPassword,
      });

      await user.save();

      return res.status(201).send("Usuário registrado com sucesso");
    } catch (err: unknown) {
      const error = err as Error;

      if (error.message.includes("duplicate key error collection"))
        return res
          .status(409)
          .json({ error: "Este nome de usuário não está disponível" });

      if (error.message.includes("Usuário") || error.message.includes("Senha"))
        return res.status(409).json(error.message);

      return res.status(500).json({ error: error.message });
    }
  }

  static async login(req: SignInRequest, res: Response) {
    const { username, password } = req.body;

    try {
      if (!username) throw new Error("Usuário não informado.");
      if (!password) throw new Error("Senha não informada.");

      const [user] = await UserModel.find({ username: username });

      if (!user) throw new Error("Usuário não encontrado.");

      const { hashedPassword, id: userId } = user;

      UserController.comparePassword(password, hashedPassword);

      const token = UserController.generateToken(userId);
      return res.status(200).send({ access_token: token });
    } catch (err: unknown) {
      const error = err as AxiosError | Error;

      if (error.message.includes("Usuário não encontrado."))
        return res.status(422).json({ error: error.message });

      if (error.message.includes("Senha inválida."))
        return res.status(406).json({ error: error.message });

      return res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;
