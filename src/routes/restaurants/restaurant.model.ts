import { ObjectId } from 'mongodb';


type Menu = {
	category: string,
	name: string,
	description: string,
	price: number,
	picture: string,
	isAvaible: boolean,
	tag: string,
}

type Day = {
	name: string;
	start: string;
	end: string;
};

type Restaurant = {
	name: string;
	description: string;
	category: string;
	location: number;
	menu: Menu[]
	schedule: Day[];
	phone: number;
	email: string;
	media: {
		facebook?: string;
		instagram?: string;
		twitter?: string;
		webSite?: string;
	};
	pictures: string[];
	logo: string;
	_id: ObjectId;
};
export default Restaurant;
