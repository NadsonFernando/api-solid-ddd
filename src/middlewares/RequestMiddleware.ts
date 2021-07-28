import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export class RequestMiddleware {
  async execute(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(401).send();
    }

    const token = authorization.replace("Bearer ", "");

    jwt.verify(token, "secret", (err) => {
      if (err) {
        return response.status(401).send();
      }

      next();
    });
  }
}
