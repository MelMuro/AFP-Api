import { ObjectId } from 'mongodb';

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
