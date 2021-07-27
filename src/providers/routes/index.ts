import { UserRoute } from "../../domain/User/user.route";
import { IRoute } from "./route.types";

export class RouteProvider implements IRoute {
  register() {
    const routes = [UserRoute];

    routes.forEach((Route) => {
      new Route().register();
    });
  }
}
