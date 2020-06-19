/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { useState } from 'react';

import { StyleSheet, ScrollView } from 'react-native';

import Categories, { COST_TYPE } from '../../assets/constants/ReportItems';
import ReportTitleItem from './Items/ReportTitleItem';
import MoneyItemsReportList from './MoneyItemsReportList';
import Accordion from 'react-native-collapsible/Accordion';

import Translation from  '../../translation/TranslationHelper';

const ReportList = props => {
	const [activeFields, setActiveFields] = useState([]);
	const { incomes = [], expenses = [] } = props.budget;
	const mappedItems = mapLists(incomes, expenses);

	//console.log(mappedItems);

	const renderHeader = (item, index) => {
		const isFirst = index === 0 ? true : false;
		const isLast = index === (mappedItems.length - 1)  ? true : false;

		return (
			<ReportTitleItem
				title = {Translation.getStringValue(item.title)}
				first = {isFirst}
				last = {isLast}
			/>
		);
	}

	const renderItem = (item) => {
		return <MoneyItemsReportList items = {item.itemList}/>;
	}

	return (
		<ScrollView style = { {width: "100%"} }
			contentContainerStyle = {{paddingVertical: 16, flexGrow:1, justifyContent:"center"}}
			centerContent = { true }>
			<Accordion
				containerStyle = {{width: "100%"}}
				onChange = { indexes => { setActiveFields(indexes) } }
				renderHeader = { renderHeader } 
				
				renderContent = { renderItem }
				activeSections = { activeFields }
				sections = { mappedItems }
			/>
		</ScrollView>
	);

}

const mapLists = (incomes, expenses) => {
	let newItems = [];

	//console.log(newItems);
	
	Categories.forEach((item, index) => {
		let itemList = []
		
		if(item.type === COST_TYPE){
			itemList = expenses.filter(cost => (cost.TAG === item.TAG && cost.money !== 0))
		}else{
			itemList = incomes;
		}

		if (itemList.length > 0){
			newItems = [...newItems, { title: item.title, itemList: itemList }]
		}
	})

	return newItems;
}

export default ReportList;