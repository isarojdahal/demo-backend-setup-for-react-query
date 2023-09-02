import express, { json } from "express";
import "reflect-metadata";
import { RegisterRoutes } from "../build/routes";
import EnvConfiguration from "./config/env.config";
import AppDataSource from "./config/database.config";
import cors from "cors";
import AppError, { ErrorHandler } from "./middlewares/errorhandler.middleware";

const app = express();

app.use(json());
app.use(cors());
app.use(ErrorHandler);
RegisterRoutes(app);

AppDataSource.initialize()
  .then(() => {
    app.listen(EnvConfiguration.PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log("err", err);
    console.log("Error connection to DB");
  });
