import { DataSource } from "typeorm";

import EnvConfiguration from "./env.config";

const AppDataSource = new DataSource({
  type: "postgres",
  host: EnvConfiguration.DB_HOST,
  database: EnvConfiguration.DB_NAME,
  password: EnvConfiguration.DB_PASSWORD,
  port: EnvConfiguration.DB_PORT,
  username: EnvConfiguration.DB_USERNAME,
  synchronize: true,
  entities: [process.cwd() + "/src/entities/**/*.ts"],
});

export default AppDataSource;
