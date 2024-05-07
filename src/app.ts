<<<<<<< HEAD
import express, { Request, Response, Application } from "express";
import { restaurantsRouter } from "./routes/restaurants/restaurants.router";
import { menusRouter } from './routes/menus/menu.router';
import { connectToDb } from "./db/client";
import bodyParser from "body-parser";
import dotenv from "dotenv";
=======
import express, { Application, Request, Response } from 'express';
import { restaurantsRouter } from './routes/restaurants/restaurants.router';
import { menusRouter } from './routes/menus/menu.router';
import { connectToDb } from './db/client';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
>>>>>>> develop

dotenv.config();

const app: Application = express();

if (process.env.NODE_ENV === 'development') {
	connectToDb();
}
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

<<<<<<< HEAD
app.use("/restaurants", restaurantsRouter);
app.use("/menus", menusRouter);
=======
app.get('/', (req: Request, res: Response) => {
	res.send({ message: 'Welcome to Express & TypeScript Server' });
});
app.use('/restaurants', restaurantsRouter);
app.use('/menus', menusRouter);
>>>>>>> develop

export default app;
