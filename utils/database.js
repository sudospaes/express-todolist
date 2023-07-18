const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "todo_db",
  "your_database_user",
  "your_database_user_password",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
