import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient } from 'mongodb'

let mongoServer: MongoMemoryServer
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

export const clearDatabase = async () => {
    (await mongoClient.db().collections()).forEach((col) => col.deleteMany({}));
};