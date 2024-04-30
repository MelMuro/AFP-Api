import { Request, Response, Router } from 'express';
import { dbCollections } from '../../db/client';
import Restaurant from './restaurant.model';

export const restaurantsRouter = Router();

restaurantsRouter.get('/', async (req: Request, res: Response) => {
    const restaurants = await dbCollections.Restaurants?.find<Restaurant>({}).toArray();
    
    res.status(200).send(restaurants);
});
