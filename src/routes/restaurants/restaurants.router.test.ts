import supertest from 'supertest';
import app from '../../index'
import * as db from '../../db/client.mock';

const request = supertest(app);

describe('Restaurants Router tests', () => {
    beforeAll(async () => {
      await db.connect();
    });

    afterEach(async () => {
      await db.clearDatabase()
    });

    afterAll(async () => {
      await db.close();
    });

    it('should test that true === true', async () => {
      const res = await request.get('/').send();
      const body = res.body;
      const message = body.message;
      expect(res.statusCode).toBe(200);
      console.log(res);
    });
    
});