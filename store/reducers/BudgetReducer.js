import { ADD_INCOME, REMOVE_INCOME } from '../actions/BudgetActions'

const initialState = {
	incomes: [],
	expenses: [],
	totalIncome: 0,
	currentBalance: 0,
}

const BudgetReducer = (state = initialState, {type, payload}) => {
	switch(type){
		case ADD_INCOME:
			const income = {
				...payload,
				createdAt: new Date(),
				id: new Date().toString(),
			};

			return {
				...state,
				totalIncome: state.totalIncome + income.money,
				currentBalance: state.currentBalance + income.money,
				incomes: [...state.incomes, income]
			}

		case REMOVE_INCOME:
			const value = state.incomes.find(income => income.id === payload.id).money; 
			
			return {
				...state,
				totalIncome: state.totalIncome - value,
				currentBalance: state.currentBalance - value,
				incomes: state.incomes.filter(income => income.id !== payload.id)
			}

		default:
			return state;
	}
}

export default BudgetReducer; 