import { ObjectId } from 'mongodb';

type Restaurant = {
	name: string;
	description: string;
	category: string;
	location: number;
	schedule: {
		monday: string;
		tuesday: string;
		wednesday: string;
		thursday: string;
		friday: string;
		saturday: string;
		sunday: string;
	};
	phone: number;
	email: string;
	media: string[];
	pictures: string[];
	id: ObjectId;
}
export default Restaurant
