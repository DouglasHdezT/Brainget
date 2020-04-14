export const updateValues = (budget) => {
	const newTotalIncome = budget.incomes.reduce((total, income) => {
		return total + income.money;
	}, 0);

	const newTotalCosts = budget.expenses.reduce((total, cost) => {
		return total + cost.money;
	}, 0);

	const newCurrentBalance = newTotalIncome - newTotalCosts;

	return {
		totalIncome: newTotalIncome,
		totalCosts: newTotalCosts,
		currentBalance: newCurrentBalance
	}
}