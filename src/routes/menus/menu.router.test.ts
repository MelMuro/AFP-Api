import { Restaurant, MenuItem } from './../restaurants/restaurant.model';
import supertest from 'supertest';
import app from '../../app';
import * as db from '../../db/client.mock';


const request = supertest(app);

describe('Menus Router tests', () => {
	beforeAll(() => {
		return db.connect();
	});

	beforeEach(() => {
		db.seedDatabase();
	});

	afterEach(() => {
		db.clearDatabase();
	});

	afterAll(() => {
		return db.close();
	});

	it('should GET all menus', async () => {
		//Act
		const res = await request.get('/menu/');
		const menuItems = res.body as Restaurant;

		//Assert
		expect(res.statusCode).toBe(200);
		expect(menuItems.menu[0].name).toBe('chilaquiles');
	});

	it.only('should GET a menu by restaurant', async () => {
		//Act
		const res = await request.get('/menu/Test Restaurant 1');
		const menuItem = res.body as Restaurant;

		//Assert
		expect(res.statusCode).toBe(200);
		expect(menuItem.menu[0].name).toBe('chilaquiles');
	});

	// it('should GET a dish from by restaurant', async () => {
	// 	//Act
	// 	const res = await request.get('/menus/Test Restaurant 1/chilaquiles');
	// 	const menus = res.body as Menu;

	// 	//Assert
	// 	expect(res.statusCode).toBe(200);
	// 	expect(menus.restaurant).toBe('Test Restaurant 1');
	// 	expect(menus.dishes[0].name).toBe('chilaquiles');
	// });

	// it('should POST a menu', async () => {
	// 	//Act
	// 	const mockMenu = {
	// 		restaurant: 'Sushito',
	// 		dishes: [
	// 			{
	// 				category: 'Entrada,',
	// 				name: 'Taco yaqui',
	// 				description: 'totopos de maiz con salsa y queso',
	// 				price: 120,
	// 				picture: 'test_picture50',
	// 				isAvailable: true,
	// 				tag: 'empanizado'
	// 			}
	// 		]
	// 	};
	// 	const res = await request.post('/menus').send(mockMenu);

	// 	const getNewRestaurant = await request.get(
	// 		`/menus/${mockMenu.restaurant}/${mockMenu.dishes[0].name}`
	// 	);
	// 	const menus = getNewRestaurant.body as Menu;

	// 	//Assert
	// 	expect(res.statusCode).toBe(201);
	// 	expect(menus.restaurant).toBe(mockMenu.restaurant);
	// 	expect(menus.dishes[0].name).toBe(mockMenu.dishes[0].name);
	// });

	// it('should UPDATE a menu', async () => {
	// 	const resBefore = await request.get('/menus');
	// 	const menusBefore = resBefore.body as Menu[];

	// 	expect(menusBefore[0].restaurant).toBe('Test Restaurant 1');
	// 	const updatedMenu = {
	// 		restaurant: 'Test Restaurant 1 Edit',
	// 		dishes: [
	// 			{
	// 				category: 'Plato fuerte,',
	// 				name: 'Sushitito',
	// 				description: 'Un sushi',
	// 				price: 222,
	// 				picture: 'test_picture50',
	// 				isAvailable: true,
	// 				tag: 'empanizado'
	// 			}
	// 		]
	// 	};

	// 	const res = await request
	// 		.put(`/menus/${menusBefore[0]._id}`)
	// 		.send(updatedMenu);

	// 	const resAfter = await request.get('/menus');
	// 	const menuAfter = resAfter.body as Menu[];

	// 	expect(res.status).toBe(200);
	// 	expect(menuAfter[0].restaurant).toBe('Test Restaurant 1 Edit');
	// });

	// it('should DELETE a menu', async () => {
	// 	const resBefore = await request.get('/menus');
	// 	const menusBefore = resBefore.body as Menu[];

	// 	const res = await request.delete(`/menus/${menusBefore[0]._id}`);

	// 	const resAfter = await request.get('/menus');
	// 	const menusAfter = resAfter.body as Menu[];

	// 	expect(res.status).toBe(200);
	// 	expect(menusBefore).toHaveLength(1);
	// 	expect(menusAfter).toHaveLength(0);
	// });

	// it.only('should GET menu from any restaurant', async () => {
	// 	try {
	// 		//Act
	// 		const res = await request.get('/menus/restaurant/Restaurant%201');

	// 		// Log de la respuesta completa para depuración
	// 		console.log('Response Status Code:', res.statusCode);
	// 		console.log('Response Body:', res.body);
	// 		console.log('Response Headers:', res.headers);

	// 		//Assert
	// 		//expect(res.statusCode).toBe(200);
	// 	} catch (error) {
	// 		console.error('Error during test:', error);
	// 		throw error; // Para asegurarte de que el test falle y no pase inadvertido
	// 	}
	// });
});
