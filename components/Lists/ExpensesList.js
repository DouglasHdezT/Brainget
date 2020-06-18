/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
			date = {new Date(item.createdAt).toLocaleDateString()}/>);

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