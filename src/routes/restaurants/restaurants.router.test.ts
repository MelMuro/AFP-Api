import supertest from 'supertest';
import app from '../../app'
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
      await db.clearDatabase()
    });

    afterAll(async () => {
      await db.close();
    });

    it.skip('should load default endpoint', async () => {
      const res = await request.get('/');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe('Welcome to Express & TypeScript Server');
    });

    it('should get all restaurants', async () => {
      const res = await request.get('/restaurants');
      const restaurants = (res.body as Restaurant[]);

      expect(res.statusCode).toBe(200);
      expect(restaurants.pop()?.name).toBe('Test Restaurant 1');
    });
});