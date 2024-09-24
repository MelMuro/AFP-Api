import { ObjectId } from 'mongodb';

export type MenuItem = {
	category: string;
	name: string;
	description: string;
	price: number;
	picture: string;
	isAvaible: boolean;
	tag: string;
	_id: ObjectId;
};

type Day = {
	name: string;
	start: string;
	end: string;
};

export type Restaurant = {
	name: string;
	description: string;
	category: string;
	location: number;
	menu: MenuItem[];
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
