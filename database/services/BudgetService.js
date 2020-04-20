import PouchDB from '../config/builder';

import { DB_NAME } from '../../assets/constants/KeyValues';
import { dateInObject, intToMonth } from '../../utils/DateUtils'
import { updateValues } from '../../utils/BudgetUtils'

import { errorWarning } from '../../components/alerts/Alerts'

import store from '../../store/Store';
import { syncBudget } from '../../store/actions/BudgetActions';
import { setLoading } from '../../store/actions/ConfigActions';


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

export const openConnection = () => {
	db = new PouchDB(DB_NAME, { adapter: 'react-native-sqlite' });
}

export const closeConnection = () => {
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

export const getYears = async () => {
	try{
		startLoading();
		let result = (await db.find({
			selector: {},
			fields: ["year"]
		}))

		result = (await result.docs).map(n => n.year)
		result = result.filter((n, i) => result.indexOf(n) === i)
		result.sort((a,b) => b - a)

		stopLoadingSimple();
		return result;		
	}catch(err){
		stopLoadingSimple()
		errorWarning()
	}
}

export const getBudgetsPerYear = async (year) => {
	startLoading();

	try{
		const rawBudgets = await (await db.find({ selector: {"year": year} })).docs;
		let budgetsPerMonth = [];
		
		rawBudgets.forEach(budget => {
			const month = budget.month;

			if( budgetsPerMonth[month] === undefined ){
				budgetsPerMonth[month] = {
					name: intToMonth(month),
					monthlyBalance: 0,
					budgets: []
				};
			}

			budgetsPerMonth[month].monthlyBalance += budget.currentBalance;
			budgetsPerMonth[month].budgets = [...budgetsPerMonth[month].budgets, budget]; 
		})

		budgetsPerMonth = budgetsPerMonth.filter(budget => budget !== undefined);

		stopLoadingSimple();
		return budgetsPerMonth;
	}catch(err){
		stopLoadingSimple();
		errorWarning();
		return [];
	}
}

export const getBudgetById = async (id) => {
	try {
		startLoading();

		const budget = await db.get(id);

		stopLoadingSimple();

		return budget;

	}catch(err) {
		stopLoadingSimple()
		errorWarning()
	}

}

export const showAll = () => {
	db.allDocs({include_docs:true}).then(docs => {
		console.log(docs);
	})
}

export const createBudget = async (periods) => {
	try{
		startLoading()
		const newBudget = new Budget(periods);
		await db.post({...newBudget});
		stopLoadingSimple()
	}catch(err){
		stopLoadingSimple()
		errorWarning()
	}
}

export const addIncome = (budgetId, title, money) => {
	startLoading();
	
	const newIncome = new Income(title, money);
	
	db.get(budgetId).then(budget => {
		budget.incomes = [...budget.incomes, newIncome];
		
		const { totalIncome, totalCosts, currentBalance } = updateValues(budget);

		budget.totalIncome = totalIncome;
		budget.totalCosts = totalCosts;
		budget.currentBalance = currentBalance;

		db.put(budget).then(info => { 
			stopLoading(budget);
		});
	})
	.catch(err => {
		stopLoadingSimple()
		errorWarning();
	});
}

export const addCost = (budgetId, title, value, isPercent, TAG) => {
	startLoading();

	db.get(budgetId).then(budget => {
		const money = isPercent ? parseFloat(( value * budget.totalIncome) / 100) : value;
		const newCost = new Cost(title, money, TAG);

		budget.expenses = [...budget.expenses, newCost];

		const { totalIncome, totalCosts, currentBalance } = updateValues(budget);

		budget.totalIncome = totalIncome;
		budget.totalCosts = totalCosts;
		budget.currentBalance = currentBalance;

		db.put(budget).then(info => { 
			stopLoading(budget);
		});
	})
	.catch(err => {
		stopLoadingSimple()
		errorWarning();
	})
}

export const updateIncome = (budgetId, id, title, money) => {
	startLoading();

	db.get(budgetId).then(budget => {
		const index = budget.incomes.findIndex(income => income._id === id);

		if( index !== -1 ){
			budget.incomes[index] = {
				...budget.incomes[index],
				title: title,
				money: parseFloat(money),
			}

			const { totalIncome, totalCosts, currentBalance } = updateValues(budget);

			budget.totalIncome = totalIncome;
			budget.totalCosts = totalCosts;
			budget.currentBalance = currentBalance;

			db.put(budget).then(info => { 
				stopLoading(budget);
			});
		}
	})
	.catch(err=>{
		stopLoadingSimple()
		errorWarning();
	})
}

export const updateCost = (budgetId, id, title, value, isPercent) => {
	startLoading();

	db.get(budgetId).then(budget => {
		const money = isPercent ? parseFloat(( parseFloat(value) * budget.totalIncome) / 100) : parseFloat(value);
		
		const index = budget.expenses.findIndex( cost => cost._id === id );

		if(index !== -1){
			budget.expenses[index] = {
				...budget.expenses[index],
				title: title,
				money: money,
			}

			const { totalIncome, totalCosts, currentBalance } = updateValues(budget);

			budget.totalIncome = totalIncome;
			budget.totalCosts = totalCosts;
			budget.currentBalance = currentBalance;

			db.put(budget).then(info => { 
				stopLoading(budget);
			});
		}
	})
	.catch(err => {
		stopLoadingSimple()
		errorWarning();
	});
}

export const removeIncome = (budgetId, id) => {
	startLoading();

	db.get(budgetId).then(budget => {
		budget.incomes = budget.incomes.filter(income => income._id !== id);
		
		const { totalIncome, totalCosts, currentBalance } = updateValues(budget);

			budget.totalIncome = totalIncome;
			budget.totalCosts = totalCosts;
			budget.currentBalance = currentBalance;

			db.put(budget).then(info => { 
				stopLoading(budget);
			});
	})
	.catch(err => {
		stopLoadingSimple()
		errorWarning();
	});
}

export const removeCost = (budgetId, id) => {
	startLoading();

	db.get(budgetId).then(budget => {
		budget.expenses = budget.expenses.filter(cost => cost._id !== id);
		
		const { totalIncome, totalCosts, currentBalance } = updateValues(budget);

			budget.totalIncome = totalIncome;
			budget.totalCosts = totalCosts;
			budget.currentBalance = currentBalance;

			db.put(budget).then(info => { 
				stopLoading(budget);
			});
	})
	.catch(err => {
		stopLoadingSimple()
		errorWarning();
	});
}

const startLoading = () => {
	store.dispatch(setLoading(true));
}

const stopLoading = (budget) => {
	store.dispatch(syncBudget(budget));
	store.dispatch(setLoading(false));
}

const stopLoadingSimple = () => {
	store.dispatch(setLoading(false));
}