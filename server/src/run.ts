import * as mongodb from "mongodb";

export interface Run {
	location: string;
	distance: integer;
	_id?: mongodb.ObjectId;
}
