/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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