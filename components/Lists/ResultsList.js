import React, { useState } from 'react';

import Accordion from 'react-native-collapsible/Accordion';
import { ScrollView } from 'react-native'

import BudgetList from './BudgetsList';
import ResultTitleItem from './Items/ResultTitleItem';

const ResultsList = props => {
	const [ activeFields, setActiveFields ] = useState([]);
	
	const renderTitle = (budgetsPerMonth, index) => {
		const isFirst = index === 0 ? true : false;
		const isLast = index === (props.total - 1)  ? true : false;
	
		return (
			<ResultTitleItem  
				title = { budgetsPerMonth.name }
				totalBalance = { budgetsPerMonth.monthlyBalance }
				first = { isFirst }
				last = { isLast }
			/>
		);
	}

	const renderContent = budgetsPerMonth => {
		return(
			<BudgetList
				budgets = { budgetsPerMonth.budgets }
				onPress = { (id) => { props.onPress(id) } }
			/>
		);
	}

	return(
		<ScrollView style = { {width: "100%"} }
			contentContainerStyle = {{paddingVertical: 16, flexGrow:1, justifyContent:"center"}}
			centerContent = { true }>
			<Accordion
				containerStyle = {{width: "100%"}}
				onChange = { indexes => { setActiveFields(indexes) } }
				renderHeader = { renderTitle } 
				
				renderContent = { renderContent }
				activeSections = { activeFields }
				sections = { props.budgetsPerYear }
			/>
		</ScrollView>
	);
}



export default ResultsList;