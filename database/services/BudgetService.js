/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import PouchDB from '../config/builder';

import { DB_NAME } from '../../assets/constants/KeyValues';
import DefaultBudgetData from '../../assets/constants/DefaultBudgetData'

import Translation from '../../translation/TranslationHelper';

import { dateInObject, intToMonth, getPreviousMonth } from '../../utils/DateUtils'
import { updateValues } from '../../utils/BudgetUtils'

import { errorWarning } from '../../components/alerts/Alerts'

import store from '../../store/Store';
import { syncBudget } from '../../store/actions/BudgetActions';
import { setLoading } from '../../store/actions/ConfigActions';


import Budget from '../../models/Budget';
import Income from '../../models/Income';
import Cost from '../../models/Cost';
import ExpensesTags from '../../assets/constants/ExpensesTags';

let db = new PouchDB(DB_NAME, { adapter: 'react-native-sqlite' });

export const showInfo = () => {
	db.info().then(info => {
		console.log(info);
	})
}

export const configIndex = () => {
	return db.createIndex({
		index:{
			fields: ["year", "month", "startDay", "endDay", "period", "periods"],
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

export const getBudgetsPerYear = async (year, compress = false) => {
	startLoading();

	try{
		const rawBudgets = await (await db.find({ selector: {"year": year} })).docs;
		let budgetsPerMonth = [];
		
		rawBudgets.forEach(budget => {
			const month = budget.month;

			if( budgetsPerMonth[month] === undefined ){
				budgetsPerMonth[month] = {
					name: intToMonth(month),
					monthInt: month,
					monthlyBalance: 0,
					budgets: compress ? undefined : []
				};
			}

			budgetsPerMonth[month].monthlyBalance += budget.currentBalance;
			compress || (budgetsPerMonth[month].budgets = [...budgetsPerMonth[month].budgets, budget]); 
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

export const getYearsAndBudgetsOfLast = async (compress = false) => {
	try {
		startLoading();

		let years = (await db.find({
			selector: {},
			fields: ["year"]
		}))

		years = (await years.docs).map(n => n.year)
		years = years.filter((n, i) => years.indexOf(n) === i)
		years.sort((a,b) => b - a)

		let budgetsInYear = [];

		if (years.length >= 1) {
			const rawBudgets = await (await db.find({ selector: {"year": years[0]} })).docs;
			
			rawBudgets.forEach(budget => {
				const month = budget.month;
	
				if( budgetsInYear[month] === undefined ){
					budgetsInYear[month] = {
						name: intToMonth(month),
						monthInt: month,
						monthlyBalance: 0,
						budgets: compress ? undefined : []
					};
				}
				
				budgetsInYear[month].monthlyBalance += budget.currentBalance;
				compress || (budgetsInYear[month].budgets = [...budgetsInYear[month].budgets, budget]); 
			})

			budgetsInYear = budgetsInYear.filter(budget => budget !== undefined);
		}

		stopLoadingSimple();
		return {
			years: years,
			budgetsOfLastYear: budgetsInYear
		}
	}catch (err){
		stopLoadingSimple()
		errorWarning()
		return {
			years: [],
			budgetsOfLastYear: [],
		}
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

export const createBudget = async (periodsConf, ignoreLoading = false) => {
	try{
		if(!ignoreLoading){
			startLoading()
		}
		
		const newBudget = new Budget(periodsConf);
		
		/* Recovering data logic */
		const { year, month, period, periods } = newBudget;
		const previousBudget = await getPreviousBudgetWithSameConfiguration(year, month, period, periods);

		if (previousBudget.length > 0){
			const newIncomes = previousBudget[0].incomes.map((item, index) => new Income(item.title, item.money, item.titleKey ,index));
			
			const filteredExpenses = previousBudget[0].expenses.filter(item => item.TAG === ExpensesTags.Fixed)
				.map((item, index) => new Cost(item.title, item.money, item.TAG, item.taxable, item.titleKey, index));

			const newExpensesBase = DefaultBudgetData.expensesKeys.filter(item => item.TAG !== ExpensesTags.Fixed)
				.map((item, index) => new Cost(Translation.getStringValue(item.key), 0, item.TAG, false, item.key, index));
			
			newBudget.incomes = newIncomes;
			newBudget.expenses = [...filteredExpenses, ...newExpensesBase];
		}else{
			const newIncomes = DefaultBudgetData.incomesKeys.map(key => new Income(Translation.getStringValue(key), 0, key));
			const newExpenses = DefaultBudgetData.expensesKeys
				.map((item, index) => new Cost(Translation.getStringValue(item.key), 0, item.TAG, false, item.key, index));

			newBudget.incomes = newIncomes;
			newBudget.expenses = newExpenses;
		}

		const { totalIncome, totalCosts, currentBalance } = updateValues(newBudget);

		newBudget.totalIncome = totalIncome;
		newBudget.totalCosts = totalCosts;
		newBudget.currentBalance = currentBalance;

		await db.post({...newBudget});
		
		if(!ignoreLoading)
			stopLoadingSimple();
		
	}catch(err){
		stopLoadingSimple()
		errorWarning()
	}
}

export const getPreviousBudgetWithSameConfiguration = async (year, month, period, periods) => {
	try{
		const prevDate = getPreviousMonth(month, year); 

		const results = await db.find({
			selector: {
				month: prevDate.month,
				year: prevDate.year,
				periods: periods,
				period: period
			},
			fields: [ "expenses", "incomes", "startDay", "endDay", "month" ]
		});
		
		return await results.docs;
	}
	catch (err){
		console.log(err);
	}	
}

export const updateBudgetQuestions = async (id ,q1, q2, q3) => {
	try {
		startLoading();

		const budget = await db.get(id);

		budget.question1 = q1;
		budget.question2 = q2;
		budget.question3 = q3;

		await db.put(budget);

		stopLoading(budget)

	}catch (err){
		stopLoadingSimple()
		errorWarning();
	}
}

export const addIncome = (budgetId, title, money, titleKey = undefined) => {
	startLoading();
	
	const newIncome = new Income(title, money, titleKey);
	
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

export const addCost = (budgetId, title, value, isPercent, TAG, taxable = false, titleKey = undefined) => {
	startLoading();

	db.get(budgetId).then(budget => {
		const money = isPercent ? parseFloat(( value * budget.totalIncome) / 100) : value;
		const newCost = new Cost(title, money, TAG, taxable, titleKey);

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

export const updateIncome = (budgetId, id, title, money, titleKey = undefined) => {
	startLoading();

	db.get(budgetId).then(budget => {
		const index = budget.incomes.findIndex(income => income._id === id);

		if( index !== -1 ){
			budget.incomes[index] = {
				...budget.incomes[index],
				title: title,
				money: parseFloat(money),
				titleKey: titleKey
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

export const updateCost = (budgetId, id, title = "", value = 0, isPercent = false, taxable = false, titleKey = undefined) => {
	startLoading();

	db.get(budgetId).then(budget => {
		const money = isPercent ? parseFloat(( parseFloat(value) * budget.totalIncome) / 100) : parseFloat(value);
		
		const index = budget.expenses.findIndex( cost => cost._id === id );

		if(index !== -1){
			budget.expenses[index] = {
				...budget.expenses[index],
				title: title,
				money: money,
				taxable: taxable,
				titleKey: titleKey
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