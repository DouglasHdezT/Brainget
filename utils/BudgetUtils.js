export const updateValues = (budget) => {
	const newTotalIncome = budget.incomes.reduce((total, income) => {
		return total + income.money;
	}, 0);

	const newCurrentBalance = budget.expenses.reduce((result, cost) =>{
		return result - cost.money;
	} , newTotalIncome);

	return {
		totalIncome: newTotalIncome,
		currentBalance: newCurrentBalance
	}
}