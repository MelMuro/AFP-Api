import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient } from 'mongodb';
import { dbCollections } from '../db/client';
import { ObjectId } from 'mongodb';

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

	dbCollections.Restaurants.insertOne({
		_id: new ObjectId('67003143978b1d8448f64448'),
		name: 'Test Restaurant 1',
		description: 'Some test description',
		category: 'Test Category',
		location: 1,
		menu: [
			{
				category: 'plato fuerte',
				name: 'chilaquiles',
				description: 'totopos de maiz con salsa y queso',
				price: 120,
				picture:
					'https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg',
				isAvailable: true,
				tag: 'enchiloso',
				_id: new ObjectId("507f191e810c19729de860ea").toString()

			},
			{
				category: 'postre',
				name: 'carlota',
				description: 'galletas maria con yogur griego y limon',
				price: 80,
				picture:
					'https://www.gastrolabweb.com/postres/2023/2/14/carlota-de-limon-un-bocado-de-alegria-al-corazon-que-preparas-con-esta-receta-33298.html#&gid=1&pid=1',
				isAvailable: true,
				tag: '',
				_id: new ObjectId()
			}
		],
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
};
