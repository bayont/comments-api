import { Sequelize } from "sequelize";

const connectionString = process.env.MYSQL_CONNECTION_STRING;
if (!connectionString) {
    console.error("Provide correct MYSQL_CONNECTION_STRING in .env file");
    process.exit(0)
}

export const sequelize = new Sequelize(process.env.MYSQL_CONNECTION_STRING, { logging: false });