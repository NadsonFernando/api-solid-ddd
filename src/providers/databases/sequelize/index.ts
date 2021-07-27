const Sequelize = require("sequelize");

const database = new Sequelize("postgres://postgres@localhost:5432/postgres", {
  dialect: "postgres",
  logging: false,
});

export { database, Sequelize };
