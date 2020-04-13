export const ADD_INCOME = 'ADD_INCOME';
export const REMOVE_INCOME = 'REMOVE_INCOME';
export const UPDATE_INCOME = 'UPDATE_INCOME';

export const ADD_COST = 'ADD_COST';
export const REMOVE_COST = 'REMOVE_COST';
export const UPDATE_COST = 'UPDATE_COST';

export const SYNC_BUDGET = 'SYNC_BUDGET';

export const syncBudget = (budget) => {
	return {
		type: SYNC_BUDGET,
		payload:{
			budget: budget,
		}
	}
}

export const addIncome = (title, money) => {
	return {
		type: ADD_INCOME,
		payload:{
			title,
			money: parseFloat(money)
		}
	}
}

export const removeIncome = (id) => {
	return {
		type: REMOVE_INCOME,
		payload: {
			id
		}
	}
}

export const updateIncome = (id, title, money) => {
	return {
		type : UPDATE_INCOME,
		payload : {
			id,
			title,
			money: parseFloat(money)
		}
	}
}

export const addCost = (title, value, isPercent, TAG) => {
	return {
		type : ADD_COST,
		payload : {
			title, isPercent, TAG,
			value : parseFloat (value)
		}
	}
}

export const removeCost = id => {
	return {
		type: REMOVE_COST,
		payload:{
			id
		}
	}
}

export const updateCost = (id, title, value, isPercent) => {
	return {
		type: UPDATE_COST,
		payload:{
			title, isPercent, id,
			value: parseFloat(value),
		}
	}
}