import express, { Request, Response , Application } from 'express';
import { restaurantsRouter }  from './routes/restaurants/restaurants.router'
import { connectToDb } from './db/client'
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app: Application = express();

const port = process.env.PORT || 8000;

connectToDb().then(() => {
  app.use(express.json());
  app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
  });

  app.use("/restaurants", restaurantsRouter);
  
  app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
  });
})
.catch((error: Error) => {
  console.error("Database connection failed", error);
  process.exit();
});

