import PouchDB from '../config/builder';
import { DB_NAME } from '../../assets/constants/KeyValues';
import { dateInObject } from '../../utils/DateUtils'
import Budget from '../../models/Budget';

let db = new PouchDB(DB_NAME, { adapter: 'react-native-sqlite' });

export const showInfo = () => {
	db.info().then(info => {
		console.log(info);
	})
}

export const configIndex = () => {
	return db.createIndex({
		index:{
			fields: ["year", "month", "startDay", "endDay"]
		}
	})
}

export const closeConncetion = () => {
	db.close().then(()=>{
		console.log("DB of BService closed!");
	})
}

export const getAll = () => {
	
}

export const getActual = () => {
	const date = dateInObject();

	return db.find({
		selector:{
			"year": date.year,
			"month": date.month,
			"startDay": {$lte: date.day},
			"endDay": {$gte: date.day}
		}
	})
}

export const createBudget = (periods) => {
	const newBudget = new Budget(periods);

	return db.post({...newBudget});
}