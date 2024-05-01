import { Request, Response, Router } from "express";
import { dbCollections } from "../../db/client";
import Restaurant from "./restaurant.model";
import { ObjectId } from "mongodb";

export const restaurantsRouter = Router();

restaurantsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const restaurants = await dbCollections.Restaurants?.find<Restaurant>(
      {}
    ).toArray();
    if (!restaurants) {
      res.status(404).send("404 no results found");
      return;
    } else {
      res.status(200).send(restaurants);
    }
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
});

//GET by name
restaurantsRouter.get(
  "/:name",
  async (req: Request, res: Response) => {
    const name = req?.params?.name;

    try {
      const restaurant = await dbCollections.Restaurants?.findOne({
        Restaurant: name,
      });

      if (!restaurant) {
      
        res.status(404).send("404 Restaurant not found");
        return;
      } else {
        
        res.status(200).send(restaurant);
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);

//POST
restaurantsRouter.post(
  "/",
  async (req: Request, res: Response) => {
    try {
     
      const newRestaurant = req.body as Restaurant;
     
      const result = await dbCollections.Restaurants?.insertOne(newRestaurant);
      result
        ? res.status(201).send(`Successfully created a new restaurant`)
        : res.status(500).send("Failed to create a new restaurant.");
    } catch (error: any) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }
);

//PUT
restaurantsRouter.put(
  "/:id",
  async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
      const updatedRestaurant: Restaurant = req.body as Restaurant;
      const query = { _id: new ObjectId(id) };

      const result = await dbCollections.Restaurants?.updateOne(query, {
        $set: updatedRestaurant,
      });

      result
        ? res.status(200).send(`Successfully updated Restaurant with id ${id}`)
        : res.status(304).send(`Restaurant with id: ${id} not updated`);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  }
);

//DELETE
restaurantsRouter.delete(
  "/:id",
  async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
      const query = { _id: new ObjectId(id) };
      const result = await dbCollections.Restaurants?.deleteOne(query);
      if (result && result.deletedCount) {
        res.status(202).send(`Successfully removed restaurant with id ${id}`);
      } else if (!result) {
        res.status(400).send(`Failed to remove restaurant with id ${id}`);
      } else if (!result.deletedCount) {
        res.status(404).send(`Restaurant with id ${id} does not exist`);
      }
    } catch (error: any) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  }
);
