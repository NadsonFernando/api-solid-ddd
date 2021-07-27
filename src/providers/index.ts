import { Sequelize } from "sequelize";
import { DatabaseProvider } from "./databases";
import { RouteProvider } from "./routes";

export const Providers = {
  register() {
    const route = new RouteProvider();
    const database = new DatabaseProvider();

    route.register();
    database.initialize();
  },
};
