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
		let query;
		if (ObjectId.isValid(restaurant)) {
			query = { _id: new ObjectId(restaurant) };
		} else {
			query = { name: restaurant };
		}

		const menuItem = await dbCollections.Restaurants?.findOne<Restaurant>(query);
		if (!menuItem) {
			res.status(404).send('Dish not found');
		}

		res.status(200).send({
			restaurant: menuItem?.name,
			menu: menuItem?.menu
		});
	} catch (error) {
		console.error(error);
		res.status(500).send('Error Dishes');
	}
});

menusRouter.get('/:restaurant/:menu', async (req: Request, res: Response) => {
	try {
		const restaurant = req.params.restaurant;
		const menu = req.params.menu.toLowerCase();
		const findMenu = await dbCollections.Restaurants?.findOne<Restaurant>({
			name: restaurant,
			'menu.name': { $regex: new RegExp(`${menu}`, 'i') }
		});
		if (!findMenu) {
			return res.status(404).send('Restaurant not found');
		}
		const dishes = findMenu.menu.filter((dish) =>
			dish.name.toLowerCase().includes(menu)
		);
		if (!dishes) {
			return res.status(404).send('dishes not found');
		}
		const result = {
			id: findMenu._id,
			menu: dishes
		};
		res.status(200).send(result);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error searching dishes');
	}
});


menusRouter.post('/:id', async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const newItem = req.body;
		newItem._id = new ObjectId();
		const findRestaurant = await dbCollections.Restaurants?.findOne<Restaurant>({ _id: new ObjectId(id) });
		if (!findRestaurant) {
			return res.status(404).send('Element not found');
		}

		const updatedRestaurant = await dbCollections.Restaurants?.updateOne(
			{ _id: new ObjectId(id) },
			{ $push: { menu: newItem } }
		);

		res.status(201).send(updatedRestaurant);


	} catch (error) {
		console.error('Error adding item to menu:', error);
		res.status(500).send('Error adding item to menu');
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


menusRouter.delete('/:restaurantId/:menuId', async (req: Request, res: Response) => {
	try {
		const { restaurantId } = req.params;
		const { menuId } = req.params;

		const updatedRestaurant = await dbCollections.Restaurants?.updateOne(
			{
				_id: new ObjectId(restaurantId),
				'menu._id': new ObjectId(menuId)
			},
			{ $pull: { menu: { _id: new ObjectId(menuId) } } } as Partial<Restaurant>
		);

		if (updatedRestaurant?.modifiedCount === 1) {
			res.status(200).send('Menu item removed successfully');
		} else {
			res.status(500).send('Failed to update restaurant');
		}
	} catch (error) {
		console.error('Error removing item from menu:', error);
		res.status(500).send('Error removing item from menu');
	}
});

//I wil continous with this

// menusRouter.delete('/:restaurant/:menuId', async (req: Request, res: Response) => {
// 	try {
// 		const { menuId } = req.params;

// 		const updatedRestaurant = await dbCollections.Restaurants?.updateOne(
// 			{ 'menu._id': new ObjectId(menuId) },
// 			{ $pull: { menu: { _id: new ObjectId(menuId) } } } as Partial<Restaurant>
// 		);

// 		if (updatedRestaurant?.modifiedCount === 1) {
// 			res.status(200).send('Menu item removed successfully');
// 		} else {
// 			res.status(500).send('Failed to update restaurant');
// 		}
// 	} catch (error) {
// 		console.error('Error removing item from menu:', error);
// 		res.status(500).send('Error removing item from menu');
// 	}
// });
