import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

class AssignDecoded {
  static async run(request: Request, response: Response, next: NextFunction) {
    try {
      const { authorization: token } = request.headers;

      const { JWT_SECRET } = process.env;

      if (request.path === "/register") return next();

      if (request.path === "/login") return next();

      if (!token)
        return response.status(500).json({ message: "Access token required" });

      if (!JWT_SECRET)
        return response.status(500).json({ message: "Internal server error" });

      const decoded = jwt.verify(token, JWT_SECRET);

      if (!decoded)
        return response.status(401).json({ message: "Unauthorized" });

      next();
    } catch (err) {
      const error = err as Error;

      return response.status(500).json({ message: error.message });
    }
  }
}

export default AssignDecoded;
