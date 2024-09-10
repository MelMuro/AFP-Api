import { dbCollections } from '../../db/client';
import { Request, Response, Router } from 'express';
import { ObjectId } from 'mongodb';
import Restaurant from '../restaurants/restaurant.model';

export const menusRouter = Router();

menusRouter.get('/', async (req: Request, res: Response) => {
	try {
		const menus = await dbCollections.Restaurants?.find<Restaurant>({}).toArray();
		if (!menus) {
			res.status(404).send('Dish not found');
		}
		res.status(200).send(menus?.map(dishes => dishes.menu));
	} catch (error) {
		console.error(error);
		res.status(500).send('Error Dishes');
	}
});

menusRouter.get('/:restaurant', async (req: Request, res: Response) => {
	const restaurant = req?.params?.restaurant;
	try {
		const menus = await dbCollections.Restaurants?.findOne<Restaurant>({ name: restaurant });
		if (!menus) {
			res.status(404).send('Dish not found');
		}
		res.status(200).send(menus?.menu);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error Dishes');
	}
});

// menusRouter.get('/restaurant/:name', async (req: Request, res: Response) => {
// 	try {
// 		const restaurantName = req.params.name;

// 		const menu = await dbCollections.Menus?.findOne<Restaurant>({
// 			restaurant: restaurantName
// 		});

// 		if (!menu) {
// 			return res.status(404).send('Restaurant or menu not found');
// 		}

// 		res.status(200).send(menu);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).send('que pedo');
// 	}
// });

menusRouter.get('/:restaurant/:dish', async (req: Request, res: Response) => {
	try {
		const restaurant = req.params.restaurant;
		const dishName = req.params.dish.toLowerCase();
		const menu = await dbCollections.Restaurants?.findOne<Restaurant>({
			name: restaurant,
			'menu.name': { $regex: new RegExp(`${dishName}`, 'i') }
		});
		if (!menu) {
			return res.status(404).send('Restaurant not found');
		}
		const dishes = menu.menu.filter((dish) =>
			dish.name.toLowerCase().includes(dishName)
		);
		if (!dishes) {
			return res.status(404).send('dishes not found');
		}
		const result = {
			id: menu._id,
			restaurant: menu.menu,
			menu: dishes
		};
		res.status(200).send(result);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error searching dishes');
	}
});

menusRouter.post('/', async (req: Request, res: Response) => {
	try {
		const newMenu = req.body;
		const result = await dbCollections.Menus?.insertOne(newMenu);
		if (!result) {
			res.status(500).send(result);
		}
		res.status(201).send(newMenu);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error insert menu');
	}
});

menusRouter.put('/:id', async (req: Request, res: Response) => {
	const id = req?.params?.id;
	try {
		const updatedMenu = req.body;
		const query = { _id: new ObjectId(id) };
		const result = await dbCollections.Menus?.updateOne(query, {
			$set: updatedMenu
		});
		if (!result) {
			res.status(500).send(result);
		}
		const updateData = await dbCollections.Menus?.findOne(query);
		if (!updateData) {
			res.status(404).send(result);
		}
		res.status(200).send(updateData);
	} catch (error) {
		console.error(error);
		res.status(500).send(error);
	}
});

menusRouter.delete('/:id', async (req: Request, res: Response) => {
	const id = req?.params?.id;
	try {
		const query = { _id: new ObjectId(id) };
		const result = await dbCollections.Menus?.deleteOne(query);
		if (!result) {
			res.status(500).send(result);
		}
		res.status(200).send(result);
	} catch (error) {
		console.error(error);
		res.status(500).send(error);
	}
});
