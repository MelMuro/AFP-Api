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
    })

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
        const menus = res.body as Menus[];

        //Assert
        expect(res.statusCode).toBe(200);
        expect(menus[0].dishes[0].name).toBe("chilaquiles");
    });

    it('should get a dish from by restaurant', async () => {
        //Act
        const res = await request.get('/menus/Test Restaurant 1/chilaquiles');
        const menus = res.body as Menus;

        //Assert
        expect(res.statusCode).toBe(200);
        expect(menus.restaurant).toBe("Test Restaurant 1");
        expect(menus.dishes[0].name).toBe("chilaquiles");
    });

    it('should post a menu', async () => {
        //Act
        const mockMenu = {
            restaurant: 'Sushito',
            dishes: [
                {
                    category: 'Entrada,',
                    name: 'Taco yaqui',
                    description: 'totopos de maiz con salsa y queso',
                    price: 120,
                    picture: 'test_picture50',
                    isAvailable: true,
                    tag: 'empanizado'
                }
            ]
        };
        const res = await request.post('/menus')
            .send(mockMenu)

        const getNewRestaurant = await request.get(`/menus/${mockMenu.restaurant}/${mockMenu.dishes[0].name}`);
        const menus = getNewRestaurant.body as Menus;

        //Assert
        expect(res.statusCode).toBe(200);
        expect(menus.restaurant).toBe(mockMenu.restaurant);
        expect(menus.dishes[0].name).toBe(mockMenu.dishes[0].name);
    });

});