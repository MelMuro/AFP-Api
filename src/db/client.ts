import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import Collections from "./CollectionsInterface";

dotenv.config();

export const dbCollections: Collections = {};

export const connectToDb = async () => {
    try {
        const mongoClient = new MongoClient(process.env.DB_CONN_STRING || "");
        await mongoClient.connect();
        console.log('Conexión exitosa a la base de datos');


        const db = mongoClient.db(process.env.DB_NAME);
        dbCollections.Menus = db.collection(process.env.DB_MENUS_COLLECTION || "");
        dbCollections.Restaurants = db.collection(process.env.DB_RESTAURANTS_COLLECTION || "")
    } catch (error) {
        console.log('Error');
    }
};