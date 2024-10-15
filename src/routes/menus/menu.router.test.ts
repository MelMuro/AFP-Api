import { Restaurant, MenuItem } from './../restaurants/restaurant.model';
import supertest from 'supertest';
import app from '../../app';
import * as db from '../../db/client.mock';
import { ObjectId } from 'mongodb';


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
		const res = await request.get('/menu');
		const menuItems = res.body as MenuItem[];

		//Assert
		expect(res.status).toBe(200);
		expect(menuItems[0].name).toBe('chilaquiles');
	});

	it('should GET a menu by restaurant', async () => {
		//Act
		const res = await request.get('/menu/Test Restaurant 1');
		const menuItem = res.body as Restaurant;
		console.log('menuItem ', menuItem);

		//Assert
		expect(res.statusCode).toBe(200);
		expect(menuItem.menu[1].name).toBe('carlota');
	});

	it('should GET a dish from by restaurant', async () => {
		//Act
		const res = await request.get('/menu/Test Restaurant 1/507f191e810c19729de860ea');
		const menuItem = res.body as Restaurant;

		//Assert
		expect(res.statusCode).toBe(200);
		expect(menuItem.name).toBe('Test Restaurant 1');
		expect(menuItem.menu[0].name).toBe('chilaquiles');
	});

	it('should create a menu', async () => {
		//Act
		const mockMenu = {
			category: 'Entrada,',
			name: 'Taco yaqui',
			description: 'totopos de maiz con salsa y queso',
			price: 120,
			picture: 'test_picture50',
			isAvailable: true,
			tag: 'empanizado'

		};
		const res = await request.post('/menu/67003143978b1d8448f64448').send(mockMenu);
		expect(res.statusCode).toBe(201);
		const getNewMenu = await request.get(
			`/menu/67003143978b1d8448f64448/${mockMenu.name}`
		);
		const dishPosted = getNewMenu.body as Restaurant;
		console.log('dishPosted vgvghvbghvg ', dishPosted);

		//Assert
		expect(res.statusCode).toBe(201);
		expect(dishPosted.menu[0].name).toBe(mockMenu.name);
	});

	it('should UPDATE a menu item', async () => {
		const resBefore = await request.get('/menu/67003143978b1d8448f64448/507f191e810c19729de860ea');
		const menuBefore = resBefore.body as Restaurant;

		expect(menuBefore.name).toBe('Test Restaurant 1');
		expect(menuBefore.menu[0].name).toBe('chilaquiles');
		const updatedMenu = {
			category: 'Plato fuerte,',
			name: 'Sushitito editado',
			description: 'Un sushi',
			price: 222,
			picture: 'test_picture50',
			isAvailable: true,
			tag: 'empanizado'
		};

		const res = await request
			.put(`/menu/67003143978b1d8448f64448/${menuBefore.menu[0]._id}`)
			.send(updatedMenu);

		const resAfter = await request.get('/menu/67003143978b1d8448f64448/507f191e810c19729de860ea');
		const menuAfter = resAfter.body as Restaurant;

		expect(res.status).toBe(200);
		expect(menuAfter.menu[0].name).toBe('Sushitito editado');
	});

	it('should DELETE a menu item', async () => {
		const resBefore = await request.get('/menu/67003143978b1d8448f64448');
		const menusBefore = resBefore.body as Restaurant;
		console.log('menusBefore ', menusBefore);

		const res = await request.delete(`/menu/67003143978b1d8448f64448/${menusBefore.menu[0]._id}`);

		const resAfter = await request.get('/menu/67003143978b1d8448f64448');
		const menusAfter = resAfter.body as Restaurant;

		expect(res.status).toBe(200);
		expect(menusBefore.menu).toHaveLength(2);
		expect(menusAfter.menu).toHaveLength(1);
	});
});
