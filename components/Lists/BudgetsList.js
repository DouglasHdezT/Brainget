import React from 'react';

import { StyleSheet, View } from 'react-native';

import SingleBudgetItem from './Items/SingleBudgetItem';

const BudgetsList = props => {
	const budgetsItems = props.budgets.map((budget, index) => {
		return (
			<SingleBudgetItem
				key = { budget._id }
				budgetID = { budget._id }
				index = { index + 1}
				startDay = { budget.startDay }
				endDay = { budget.endDay }
				totalIncome = { budget.totalIncome }
				totalCosts = { budget.totalCosts }
				totalBalance = { budget.currentBalance }/>
		);	
	});

	return(
		<View style = { styles.container }>
			{ budgetsItems }
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		alignItems:"stretch",

		marginHorizontal:8,
		paddingVertical: 8,
		paddingHorizontal:8,

		backgroundColor: "#fff"
	}
});

export default BudgetsList;