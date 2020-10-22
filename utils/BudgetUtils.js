/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import { Keys } from '../translation/TranslationHelper'; //Variable OP6

export const updateValues = (budget) => {
	const filteredExpenses = budget.expenses.filter(cost => cost.titleKey !== Keys.variable_op6);

	const newTotalIncome = budget.incomes.reduce((total, income) => {
		return total + income.money;
	}, 0);

	const newTotalCosts = filteredExpenses.reduce((total, cost) => {
		return total + cost.money;
	}, 0);

	const newCurrentBalance = newTotalIncome - newTotalCosts;

	return {
		totalIncome: newTotalIncome,
		totalCosts: newTotalCosts,
		currentBalance: newCurrentBalance
	}
}