import { ADD_INCOME, REMOVE_INCOME, UPDATE_INCOME } from '../actions/BudgetActions'
import Income from '../../models/Income';

const initialState = {
	incomes: [],
	expenses: [],
	totalIncome: 0,
	currentBalance: 0,
}

const BudgetReducer = (state = initialState, {type, payload}) => {
	let newIncomes = []; 
	let newTotalIncome = 0;
	
	switch(type){
		case ADD_INCOME:
			const income = new Income(payload.title, payload.money);

			newIncomes = [...state.incomes, income]; 
			newTotalIncome = updateTotalIncome(newIncomes);

			return {
				...state,
				totalIncome: newTotalIncome,
				currentBalance: newTotalIncome,
				incomes: newIncomes
			};

		case REMOVE_INCOME:
			newIncomes = state.incomes.filter(income => income._id !== payload.id); 
			newTotalIncome = updateTotalIncome(newIncomes);

			return {
				...state,
				totalIncome: newTotalIncome,
				currentBalance: newTotalIncome,
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

			
			return {
				...state,
				totalIncome: newTotalIncome,
				currentBalance: newTotalIncome,
				incomes: newIncomes
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

export default BudgetReducer; 