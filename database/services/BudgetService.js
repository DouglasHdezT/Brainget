import PouchDB from '../config/builder';

import { DB_NAME } from '../../assets/constants/KeyValues';
import { dateInObject } from '../../utils/DateUtils'
import { updateValues } from '../../utils/BudgetUtils'

import { errorWarning } from '../../components/alerts/Alerts'

import Budget from '../../models/Budget';
import Income from '../../models/Income';
import Cost from '../../models/Cost';

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

export const addIncome = (budgetId, title, money) => {
	const newIncome = Income(title, money);

	db.get(budgetId).then(budget => {
		budget.incomes = [...budget.incomes, newIncome];
		
		const { totalIncome, currentBalance } = updateValues(budget);

		budget.totalIncome = totalIncome;
		budget.currentBalance = currentBalance;

		db.put(budget);
	})
	.catch(err => {
		errorWarning();
	});
}

export const addCost = (budgetId, title, value, isPercent, TAG) => {
	db.get(budgetId).then(budget => {
		const money = isPercent ? parseFloat(( value * budget.totalIncome) / 100) : value;
		const newCost = new Cost(title, money, TAG);

		budget.expenses = [...budget.expenses, newCost];

		const { totalIncome, currentBalance } = updateValues(budget);

		budget.totalIncome = totalIncome;
		budget.currentBalance = currentBalance;

		db.put(budget);
	})
	.catch(err => {
		errorWarning();
	})
}

export const updateIncome = (budgetId, id, title, money) => {
	db.get(budgetId).then(budget => {
		const index = budget.incomes.findIndex(income => income._id === id);

		if( index !== -1 ){
			budget.incomes[index] = {
				...budget.incomes[index],
				title: title,
				money: money,
			}

			const { totalIncome, currentBalance } = updateValues(budget);

			budget.totalIncome = totalIncome;
			budget.currentBalance = currentBalance;

			db.put(budget);
		}
	})
	.catch(err=>{
		errorWarning();
	})
}

export const updateCost = (budgetId, id, title, value, isPercent) => {
	db.get(budgetId).then(budget => {
		const money = isPercent ? parseFloat(( value * budget.totalIncome) / 100) : value;
		
		const index = budget.expenses.findIndex( cost => cost._id === id );

		if(index !== -1){
			budget.expenses[index] = {
				...budget.expenses[index],
				title: title,
				money: money,
			}

			const { totalIncome, currentBalance } = updateValues(budget);

			budget.totalIncome = totalIncome;
			budget.currentBalance = currentBalance;

			db.put(budget);
		}
	})
	.catch(err => {
		errorWarning();
	});
}

export const removeIncome = (budgetId, id) => {
	db.get(budgetId).then(budget => {
		budget.incomes = budget.incomes.filter(income => income._id !== id);
		
		const { totalIncome, currentBalance } = updateValues(budget);

			budget.totalIncome = totalIncome;
			budget.currentBalance = currentBalance;

			db.put(budget);
	})
	.catch(err => {
		errorWarning();
	});
}

export const removeCost = (budgetId, id) => {
	db.get(budgetId).then(budget => {
		budget.expenses = budget.expenses.filter(cost => cost._id !== id);
		
		const { totalIncome, currentBalance } = updateValues(budget);

			budget.totalIncome = totalIncome;
			budget.currentBalance = currentBalance;

			db.put(budget);
	})
	.catch(err => {
		errorWarning();
	});
}