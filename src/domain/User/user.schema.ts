import { database, Sequelize } from "../../providers/databases/sequelize";
import { Schema } from "../../shared/constants/schema";

const UserSchema = database.define(Schema.USER, {
  id: {
    type: Sequelize.STRING,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
  },
  bio: {
    type: Sequelize.STRING,
  },
});

export { UserSchema };
