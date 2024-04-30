import { ObjectId } from "mongodb";

type Menus = {
    _id: ObjectId,
    restaurant: string,
    dishes: [
        {
            category: string,
            name: string,
            description: string,
            price: number,
            picture: string,
            isAvaible: boolean,
            tag: string,
        }
    ]
}
export default Menus
// Duda con la bd, en los menus, 