import "dotenv/config";

export default class EnvConfiguration {
  static PORT = process.env.PORT;
  static DB_HOST = process.env.DB_HOST;
  static DB_PORT = Number(process.env.DB_PORT);
  static DB_NAME = process.env.DB_NAME;
  static DB_USERNAME = process.env.DB_USERNAME;
  static DB_PASSWORD = process.env.DB_PASSWORD;
}
