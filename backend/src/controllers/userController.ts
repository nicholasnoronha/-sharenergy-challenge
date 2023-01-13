import { AxiosError } from "axios";
import { UserModel } from "../models/user";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

interface SignInRequest extends Request {
  body: { username: string; password: string; isRemembering: boolean };
}

class UserController {
  static verifyPassword(password: string, hashedPassword: string): void {
    const isPasswordValid = bcrypt.compareSync(password, hashedPassword);

    if (!isPasswordValid) throw new Error("Invalid password");
  }

  static generateToken(user_id: string, isRemembering: boolean): string | null {
    if (!isRemembering) return null;
    const paramsToAssignToToken = { user_id: user_id };

    const jwtSignOptions = { expiresIn: "7d" };

    if (!JWT_SECRET) throw new Error("JWT_SECRET_NOT_FOUND");

    return jwt.sign(paramsToAssignToToken, JWT_SECRET, jwtSignOptions);
  }

  static async register(req: Request, res: Response) {
    const { username, password } = req.body;

    if (!username) throw new Error("Username is required");
    if (!password) throw new Error("Password is required");

    const hashedPassword = await bcrypt.hash(password, 12);

    try {
      const user = new UserModel({
        username,
        hashedPassword,
      });

      user.save().then(
        () => console.log("One entry added"),
        (err: any) => console.log(err)
      );

      return res.status(201).send("Usuário registrado com sucesso");
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  static async login(req: SignInRequest, res: Response) {
    const { username, password, isRemembering } = req.body;

    if (!username) throw new Error("Username is required");
    if (!password) throw new Error("Password is required");

    const [user] = await UserModel.find({ username: username });
    if (!user) throw new Error("User not registered");

    const { hashedPassword } = user;

    try {
      UserController.verifyPassword(password, hashedPassword);

      const { id } = user;
      const token = UserController.generateToken(id, isRemembering);

      if (token) return res.status(200).send({ access_token: token });

      return res.status(200).send({ message: "Usuário logado com sucecsso" });
    } catch (err) {
      const error = err as AxiosError;

      return res.status(500).json(error.message);
    }
  }
}

export default UserController;
