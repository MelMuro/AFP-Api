import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient } from 'mongodb';
import { dbCollections } from '../db/client';

let mongoServer: MongoMemoryServer;
let mongoClient: MongoClient;

export const connect = async () => {
	mongoServer = await MongoMemoryServer.create();
	mongoClient = await MongoClient.connect(mongoServer.getUri(), {});
};

export const close = async () => {
	await mongoClient.db().dropDatabase();
	await mongoClient.close();
	await mongoServer.stop();
};

export const clearDatabase = () => {
	mongoClient.db().dropDatabase();
};

export const seedDatabase = () => {
	dbCollections.Restaurants = mongoClient
		.db()
		.collection(process.env.DB_RESTAURANTS_COLLECTION);
	dbCollections.Menus = mongoClient
		.db()
		.collection(process.env.DB_MENUS_COLLECTION);

	dbCollections.Restaurants.insertOne({
		name: 'Test Restaurant 1',
		description: 'Some test description',
		category: 'Test Category',
		location: 1,
		schedule: [
			{
				name: 'Lunes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Martes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Miercoles',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Jueves',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Viernes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Sabado',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Domingo',
				start: '8:00',
				end: '17:00'
			}
		],
		phone: 6621234567,
		email: 'test@mail.com',
		media: ['testLink.com', 'testLink2.com'],
		pictures: ['test_pic1']
	});

	dbCollections.Menus.insertOne({
		restaurant: 'Test Restaurant 1',
		dishes: [
			{
				category: 'plato fuerte',
				name: 'chilaquiles',
				description: 'totopos de maiz con salsa y queso',
				price: 120,
				picture: 'test_picture1',
				isAvailable: true,
				tag: 'enchiloso'
			}
		]
	});
};
