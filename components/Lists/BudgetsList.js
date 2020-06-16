/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View } from 'react-native';

import SingleBudgetItem from './Items/SingleBudgetItem';

const BudgetsList = props => {
	const budgetsItems = props.budgets.map((budget, index) => {
		return (
			<SingleBudgetItem
				key = { budget._id }
				budgetID = { budget._id }
				onPress = { () => { props.onPress(budget._id) } }
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