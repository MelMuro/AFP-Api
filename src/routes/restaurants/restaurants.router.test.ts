import supertest from 'supertest';
import app from '../../app';
import * as db from '../../db/client.mock';
import Restaurant from './restaurant.model';

const request = supertest(app);

describe('Restaurants Router tests', () => {
	beforeAll(async () => {
		await db.connect();
	});

	beforeEach(async () => {
		await db.seedDatabase();
	});

	afterEach(async () => {
		await db.clearDatabase();
	});

	afterAll(async () => {
		await db.close();
	});

	it('should get all restaurants', async () => {
		//Act
		const res = await request.get('/restaurants');
		const restaurants = res.body as Restaurant[];

		//Assert
		expect(res.statusCode).toBe(200);
		expect(restaurants[0].name).toBe('Test Restaurant 1');
	});
});
