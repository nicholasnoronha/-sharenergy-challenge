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

    if (!username) throw new Error("Username is required");
    if (!password) throw new Error("Password is required");

    try {
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new UserModel({
        username,
        hashedPassword,
      });

      await user.save();

      return res.status(201).send("Usuário registrado com sucesso");
    } catch (err: unknown) {
      const error = err as Error;
      return res.status(500).json({ error: error.message });
    }
  }

  static async login(req: SignInRequest, res: Response) {
    const { username, password } = req.body;

    if (!username) throw new Error("Username is required");
    if (!password) throw new Error("Password is required");

    try {
      const [user] = await UserModel.find({ username: username });

      if (!user) throw new Error("User not registered");

      const { hashedPassword, id: userId } = user;

      UserController.comparePassword(password, hashedPassword);

      const token = UserController.generateToken(userId);
      return res.status(200).send({ access_token: token });
    } catch (err: unknown) {
      const error = err as AxiosError | Error;

      return res.status(500).json(error.message);
    }
  }
}

export default UserController;
