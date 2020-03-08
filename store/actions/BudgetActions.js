export const ADD_INCOME = 'ADD_INCOME';
export const REMOVE_INCOME = 'REMOVE_INCOME';
export const UPDATE_INCOME = 'UPDATE_INCOME';

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