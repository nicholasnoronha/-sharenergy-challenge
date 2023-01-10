import { User, Client } from "../db/config";
import { Express, Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

export class UserController {
  static async register(req: Request, res: Response) {
    const { username, password } = req.body;

    if (!username) throw new Error("Username is required");
    if (!password) throw new Error("Password is required");

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("hashedPassword", hashedPassword);
    console.log("hashedPassword", typeof hashedPassword);
    try {
      const user = new User({
        username,
        hashedPassword,
      });

      user.save().then(
        () => console.log("One entry added"),
        (err: any) => console.log(err)
      );
      res.send("Usuário registrado com sucesso");
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default UserController;
