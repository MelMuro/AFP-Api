import express, { Request, Response, Application } from "express";
import { restaurantsRouter } from "./routes/restaurants/restaurants.router";
import { connectToDb } from "./db/client";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

if (process.env.NODE_ENV === "development") {
  connectToDb();
}
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/restaurants", restaurantsRouter);

export default app;
