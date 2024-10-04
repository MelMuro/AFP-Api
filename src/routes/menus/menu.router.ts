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

		const combinedMenus = menus?.flatMap(restaurant => [
			...restaurant.menu,
		]);

		res.status(200).send(combinedMenus);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error Dishes');
	}
});

menusRouter.get('/:restaurant', async (req: Request, res: Response) => {
	const { restaurant } = req.params;
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
		const result = {
			_id: menuItem?._id,
			name: menuItem?.name,
			menu: menuItem?.menu
		};
		res.status(200).send(result);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error Dishes');
	}
});

menusRouter.get('/:restaurant/:menu', async (req: Request, res: Response) => {
	try {
		const { restaurant } = req.params;
		const menu = req.params.menu.toLowerCase();
		let query;
		if (ObjectId.isValid(restaurant)) {
			query = {
				_id: new ObjectId(restaurant),
				'menu.name': { $regex: new RegExp(`${menu}`, 'i') }
			};
		} else {
			query = {
				name: restaurant,
				'menu.name': { $regex: new RegExp(`${menu}`, 'i') }
			};
		}

		const findMenu = await dbCollections.Restaurants?.findOne<Restaurant>(query);
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
			_id: findMenu._id,
			name: findMenu.name,
			menu: dishes
		};
		res.status(200).send(result);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error searching dishes');
	}
});


menusRouter.post('/:restaurantId', async (req: Request, res: Response) => {
	try {
		const { restaurantId } = req.params;
		const newItem = req.body;
		newItem._id = new ObjectId();
		const findRestaurant = await dbCollections.Restaurants?.findOne<Restaurant>({ _id: new ObjectId(restaurantId) });
		if (!findRestaurant) {
			return res.status(404).send('Element not found');
		}

		const updatedRestaurant = await dbCollections.Restaurants?.updateOne(
			{ _id: new ObjectId(restaurantId) },
			{ $push: { menu: newItem } }
		);

		res.status(201).send(updatedRestaurant);


	} catch (error) {
		console.error('Error adding item to menu:', error);
		res.status(500).send('Error adding item to menu');
	}
});

menusRouter.put('/:restaurantId/:menuId', async (req: Request, res: Response) => {
	try {
		const { restaurantId, menuId } = req.params;
		const updatedMenu = req.body;

		const findDish = await dbCollections.Restaurants?.findOne(
			{ _id: new ObjectId(restaurantId), 'menu._id': new ObjectId(menuId) },
			{ projection: { 'menu.$': 1 } }
		)

		if (!findDish || !findDish.menu || findDish.menu.length === 0) {
			return res.status(404).send('Element not found');
		}

		const currentMenu = findDish.menu[0];
		const updatedMenuItem = { ...currentMenu, ...updatedMenu };

		const updateData = await dbCollections.Restaurants?.updateOne(
			{
				_id: new ObjectId(restaurantId),
				'menu._id': new ObjectId(menuId)
			},
			{ $set: { 'menu.$': updatedMenuItem } }
		);
		if (!updateData) {
			return res.status(404).send('Element not found');
		}
		if (updateData?.modifiedCount === 1) {
			res.status(200).send('Menu item updated successfully');
		} else {
			res.status(500).send('Failed to update restaurant');
		}
	} catch (error) {
		console.error(error);
		res.status(500).send(error);
	}
});



menusRouter.delete('/:restaurantId/:menuId', async (req: Request, res: Response) => {
	try {
		const { restaurantId, menuId } = req.params;

		const updatedRestaurant = await dbCollections.Restaurants?.updateOne(
			{
				_id: new ObjectId(restaurantId),
				'menu._id': new ObjectId(menuId)
			},
			{ $pull: { menu: { _id: new ObjectId(menuId) } } } as Partial<Restaurant>
		);
		if (!updatedRestaurant) {
			return res.status(404).send('Element not found');
		}
		if (updatedRestaurant?.modifiedCount === 1) {
			res.status(200).send('Menu item removed successfully');
		} else {
			res.status(500).send('Failed to deleted restaurant');
		}
	} catch (error) {
		console.error('Error removing item from menu:', error);
		res.status(500).send('Error removing item from menu');
	}
});
