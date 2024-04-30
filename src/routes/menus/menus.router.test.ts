import supertest from "supertest";
import app from "../../app";
import * as db from "../../db/client.mock";
import Menus from "./menus.model";

const request = supertest(app);

describe('Menus Router tests', () => {
    beforeAll(async () => {
        await db.connect();
    })

    beforeEach(async () => {
        await db.seedDatabase();
    });

    afterEach(async () => {
        await db.clearDatabase();
    });

    afterAll(async () => {
        await db.close();
    });

    it('should get all menus', async () => {
        //Act
        const res = await request.get('/menus');
        const menus = res.body as Menus[];

        //Assert
        expect(res.statusCode).toBe(200);
        expect(menus[0].restaurant).toBe("Test Restaurant 1");
    });

    it('should get a dish from any restaurant', async () => {
        //Act
        const res = await request.get('/menus/chilaquiles');
        const menu = res.body as Menus;

        //Assert
        expect(res.statusCode).toBe(200);
        expect(menu.dishes[0].name).toBe("chilaquiles");
    });

});