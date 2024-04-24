import { ObjectId } from "mongodb";

export default interface Menu {
    _id: ObjectId,
    restaurant: string,
    dishes: [
        category: string,
        name: string,
        description: string,
        price: number,
        picture: string,
        isAvaible: boolean,
        tag: string,
    ]
}
// Duda con la bd, en los menus, 