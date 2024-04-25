import { Request, Response, Router } from 'express';
import { dbCollections } from '../../db/client'
import Menu from './menu.model';
import { ObjectId } from 'mongodb';

export const menusRouter = Router();

//GetAll
menusRouter.get('/', async (req: Request, res: Response) => {
    try {
        const menus = await dbCollections.Menus?.find<Menu>({}).toArray();
        if (!menus) {
            res.status(404).send('Dish not found');
        }
        res.status(200).send(menus);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error Dishes')
    }
});

//Get Dishes for Anywhere
menusRouter.get('/:dish', async (req: Request, res: Response) => {
    try {
        const name = req.params.dish.toLowerCase();
        const menu = await dbCollections.Menus?.findOne<Menu>({
            'dishes.name': { $regex: new RegExp(`${name}`, 'i') }
        });

        if (!menu) {
            return res.status(404).send('Dish not found');
        }

        const dishes = menu.dishes.filter((dish: any) => dish.name.toLowerCase().includes(name));

        if (dishes.length === 0) {
            return res.status(404).send('Dish not found');
        }

        const result = {
            id: menu._id,
            restaurant: menu.restaurant,
            dishes: dishes
        };

        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error searching dishes');
    }
});

//Get Dish by Restaurant
menusRouter.get('/:restaurant/:dish', async (req: Request, res: Response) => {
    try {
        const restaurant = req.params.restaurant;
        const dishName = req.params.dish.toLowerCase();
        const menu = await dbCollections.Menus?.findOne<Menu>({
            'restaurant': restaurant,
            'dishes.name': { $regex: new RegExp(`${dishName}`, 'i') }
        });

        if (!menu) {
            return res.status(404).send('Restaurant not found');
        }

        const dishes = menu.dishes.filter((dish: any) => dish.name.toLowerCase().includes(dishName));

        if (!dishes) {
            return res.status(404).send('dishes not found');
        }

        const result = {
            id: menu._id,
            restaurant: menu.restaurant,
            dishes: dishes
        };


        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error searching dishes');
    }
});


//Manejarlo a nivel Menu
//POST crear un nuevo  menu

menusRouter.post('/', async (req: Request, res: Response) => {
    try {

        const newMenu = req.body;
        const result = await dbCollections.Menus?.insertOne(newMenu);

        if (!result) {
            res.status(500).send(result)
        }
        const insertedMenu = result?.insertedId;


        res.status(200).send(insertedMenu);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error insert menu');
    }
});


//PUT Actualiar menu

menusRouter.put('/:id', async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const updatedMenu = req.body;
        const query = { _id: new ObjectId(id) };

        const result = await dbCollections.Menus?.updateOne(query, { $set: updatedMenu });

        res.status(200).send(result);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

//DELETE Borrar el menu

menusRouter.delete('/id', async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {

        const query = { _id: new ObjectId(id) };
        const result = await dbCollections.Menus?.deleteOne(query);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});