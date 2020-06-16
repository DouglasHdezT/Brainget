/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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