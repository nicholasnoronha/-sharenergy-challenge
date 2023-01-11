import { User } from "../db/config";
import { Express, Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

interface SignInRequest extends Request {
  body: { username: string; password: string };
}

class UserController {
  static hashP() {
    console.log("1", 1);
    return 1;
  }
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

  static async login(req: SignInRequest, res: Response) {
    const { username, password } = req.body;

    if (!username) throw new Error("Username is required");
    if (!password) throw new Error("Password is required");

    const [user] = await User.find({ username: username });
    if (!user) throw new Error("User not registered");

    const { hashedPassword } = user;

    const isPasswordValid = bcrypt.compareSync(password, hashedPassword);

    if (!isPasswordValid) throw new Error("Invalid password");

    try {
      const { id } = user;

      const paramsToAssignToToken = { user_id: id };

      const jwtSignOptions = { expiresIn: "7d" };

      if (!JWT_SECRET) throw new Error("JWT_SECRET_NOT_FOUND");

      const token = jwt.sign(paramsToAssignToToken, JWT_SECRET, jwtSignOptions);

      res.status(200).send({ access_token: token });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default UserController;
