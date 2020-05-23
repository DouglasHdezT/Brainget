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
			itemList = expenses.filter(cost => cost.TAG === item.TAG)
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