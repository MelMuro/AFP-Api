import supertest from 'supertest';
import app from '../../app';
import * as db from '../../db/client.mock';
import Restaurant from './restaurant.model';

const request = supertest(app);

describe('Restaurants Router tests', () => {
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

	it('should get all restaurants', async () => {
		//Act
		const res = await request.get('/restaurants');
		const restaurants = res.body as Restaurant[];

		//Assert
		expect(res.statusCode).toBe(200);
		expect(restaurants[0].name).toBe('Test Restaurant 1');
	});

	it('should get only one restaurant', async () => {
		//Act
		const res = await request.get('/restaurants/Test%20Restaurant%201');
		const restaurant = res.body as Restaurant;

		//Assert
		expect(res.statusCode).toBe(200);
		expect(restaurant.location).toBe(1);
	});

	it('should create a new restaurant', async () => {
		// Arrange
		const newRestaurant = {
			name: 'Akitabara',
			description: 'Casa ramen',
			category: 'Comida japonesa',
			location: 3,
			schedule: {
				monday: 'Cerrado',
				tuesday: '12:00 pm a 8:00 pm',
				wednesday: '12:00 pm a 8:00 pm',
				thursday: '12:00 pm a 8:00 pm',
				friday: '12:00 pm a 8:00 pm',
				saturday: '12:00 pm a 8:00 pm',
				sunday: '2:00 pm a 6:00 pm'
			},
			phone: 6624670000,
			email: 'akita@bara.com',
			media: [
				'https://www.instagram.com/akitabara/',
				'https://www.facebook.com/AkitabaraCasaRamen'
			],
			pictures: [
				'https://scontent.cdninstagram.com/v/t39.30808-6/406328835_18328903135100950_2743190508086425728_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzQ5eDE2ODcuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=eQPPHJ8FEkwAb6zxA6s&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI0Njk5MTA5OTIxODY5OTYzOA%3D%3D.2-ccb7-5&oh=00_AfDIHbV6trOvBSnrPCl68jWAmLFHDJdpoBWVvMQ_mE_kkQ&oe=662D48B0&_nc_sid=10d13b',
				'https://scontent.cdninstagram.com/v/t39.30808-6/341262521_903843497338952_7787466491387203718_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=4_D0QKtQoZQAb6uFIwJ&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzA5MjYxNDU1NDYxNDk1NjcyNQ%3D%3D.2-ccb7-5&oh=00_AfDvPKJL-A55Sw6biAEwzL3c3YC_FXByAC-5vl_edRKYiw&oe=662D1D02&_nc_sid=10d13b'
			]
		};

		// Act
		const res = await request.post('/restaurants').send(newRestaurant);

		// Assert
		expect(res.statusCode).toBe(201);
		expect(res.text).toBe('Successfully created a new restaurant');
	});
});
