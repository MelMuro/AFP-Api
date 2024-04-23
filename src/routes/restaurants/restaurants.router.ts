import { Request, Response, Router } from 'express';
import { dbCollections } from '../../db/client'
import Restaurant from './restaurant.model';

export const restaurantsRouter = Router();

restaurantsRouter.get('/', async (req: Request, res: Response) => {
    try{

    const restaurants = await dbCollections.Restaurants?.find<Restaurant>({}).toArray();

    res.status(200).send(restaurants);
}catch (error){
    res.status(500).send((error as Error).message)
}
});

//by name
restaurantsRouter.get('/:name', async (req: Request, res: Response) => {
    const name = req?.params?.name;
    
    try {
        const restaurant = await dbCollections.Restaurants?.findOne({ name });
        
        if (!restaurant) {
            console.log(res.status)
            res.status(404).send("404 Restaurant not found");
            return;
        }else{
            console.log("estatus ", res.status)
            res.send(restaurant);
           
        }
        
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

