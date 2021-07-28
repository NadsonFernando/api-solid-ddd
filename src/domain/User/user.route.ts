import { IRoute } from "../../providers/routes/route.types";
import { app } from "../../server";

import { authenticate } from "./useCases/UserAuthUseCase";
import { create } from "./useCases/UserCreateUseCase";
import { getCurrentUser } from "./useCases/UserGetCurrentUseCase";

import { requestMiddleware } from "../../middlewares";

export class UserRoute implements IRoute {
  register() {
    app.post("/api/users/login", (request, response) => {
      return authenticate.handle(request, response);
    });

    app.post("/api/users", (request, response) => {
      return create.handle(request, response);
    });

    app.get("/api/user", requestMiddleware.execute, (request, response) => {
      return getCurrentUser.handle(request, response);
    });
  }
}
