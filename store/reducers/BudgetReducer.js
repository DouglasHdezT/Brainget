import { ADD_INCOME, REMOVE_INCOME, UPDATE_INCOME, ADD_COST, REMOVE_COST, UPDATE_COST } from '../actions/BudgetActions'
import Income from '../../models/Income';
import Cost from '../../models/Cost';

const initialState = {
	title: "",
	year:0,
	month:0,
	startDay: 0,
	endDay: 0,
	incomes: [],
	expenses: [],
	totalIncome: 0,
	currentBalance: 0,
}

const BudgetReducer = (state = initialState, {type, payload}) => {
	let newIncomes = []; 
	let newTotalIncome = 0;
	let newExpenses = [];
	let newCurrentBalance = 0;
	let money = 0;

	switch(type){
		case ADD_INCOME:
			const income = new Income(payload.title, payload.money);

			newIncomes = [...state.incomes, income]; 
			newTotalIncome = updateTotalIncome(newIncomes);
			newCurrentBalance = updateCurrentBalance(state.expenses, newTotalIncome);

			return {
				...state,
				totalIncome: newTotalIncome,
				currentBalance: newCurrentBalance,
				incomes: newIncomes
			};

		case REMOVE_INCOME:
			newIncomes = state.incomes.filter(income => income._id !== payload.id); 
			newTotalIncome = updateTotalIncome(newIncomes);
			newCurrentBalance = updateCurrentBalance(state.expenses, newTotalIncome);

			return {
				...state,
				totalIncome: newTotalIncome,
				currentBalance: newCurrentBalance,
				incomes: newIncomes
			};

		case UPDATE_INCOME:
			newIncomes = [... state.incomes];
			
			let oldIncome = newIncomes.findIndex(income => income._id === payload.id);
			newIncomes[oldIncome] = {
				...newIncomes[oldIncome],
				title: payload.title,
				money: payload.money,
			}

			newTotalIncome = updateTotalIncome(newIncomes);
			newCurrentBalance = updateCurrentBalance(state.expenses, newTotalIncome);

			
			return {
				...state,
				totalIncome: newTotalIncome,
				currentBalance: newCurrentBalance,
				incomes: newIncomes
			}
		case ADD_COST:
			money = payload.isPercent ? parseFloat((state.totalIncome * payload.value)/100) : payload.value;
			const cost = new Cost(payload.title, money, payload.TAG);

			newExpenses = [...state.expenses, cost];
			newCurrentBalance = updateCurrentBalance(newExpenses, state.totalIncome); 

			return {
				...state,
				expenses: newExpenses,
				currentBalance: newCurrentBalance,
			}
		case REMOVE_COST:
			newExpenses = state.expenses.filter(cost => cost._id !== payload.id);
			newCurrentBalance = updateCurrentBalance(newExpenses, state.totalIncome);
			
			return {
				...state,
				expenses: newExpenses,
				currentBalance: newCurrentBalance,
			}
		case UPDATE_COST:
			newExpenses = [...state.expenses];
			
			money = payload.isPercent ? parseFloat((state.totalIncome * payload.value)/100) : payload.value;
			const oldCost = newExpenses.findIndex(cost => cost._id === payload.id);
			newExpenses[oldCost] = {
				...newExpenses[oldCost],
				money: money,
				title: payload.title
			}

			newCurrentBalance = updateCurrentBalance(newExpenses, state.totalIncome);

			return {
				...state,
				expenses: newExpenses,
				currentBalance: newCurrentBalance
			}
		default:
			return state;
	}
}

const updateTotalIncome  = incomes => {
	return incomes.reduce((total, income) => {
		return total + income.money;
	}, 0);
}

const updateCurrentBalance = (expenses, totalIncome) => {
	return expenses.reduce((result, cost) =>{
		return result - cost.money;
	} , totalIncome);
}

export default BudgetReducer; 