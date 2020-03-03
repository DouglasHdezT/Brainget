export const ADD_INCOME = 'ADD_INCOME';
export const REMOVE_INCOME = 'REMOVE_INCOME';

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