import { UserSchema } from "../../domain/User/user.schema";
import { IDatabase } from "./database.types";
import { database } from "./sequelize";

export class DatabaseProvider implements IDatabase {
  async initialize() {
    const schemas = [UserSchema];
    schemas.forEach((Schema) => new Schema());

    await database.sync();
  }
}
