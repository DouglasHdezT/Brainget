import React from 'react';

import { StyleSheet, FlatList, View } from 'react-native';

import MoneyItem from "./Items/MoneyItem";
import AddNewItem from "./Items/AddNewItem";

const ExpensesList = props => {
	const createItem = (item) => (
		<MoneyItem 
			update = {() => props.openAddModal(false, item._id)}
			title = {item.title} 
			money = {item.money} 
			isTaxable = { item.taxable }
			date = {item.createdAt}/>);

	return (
		<View style = {styles.view}>
			<FlatList
				contentContainerStyle ={{alignItems: 'stretch'}}
				data = {props.items}
				renderItem = {({item}) => createItem(item)}
				keyExtractor = {item => item._id}/>

			<AddNewItem cost openAddModal = {() => props.openAddModal(true)}/>
		</View>
	);
}

const styles = StyleSheet.create({
	view:{
		flex:1,
		justifyContent:"center",
		alignItems:"stretch"
	}
});

export default ExpensesList;