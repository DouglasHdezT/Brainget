import React, { Component } from 'react';

import { View, FlatList, Text, StyleSheet } from 'react-native';
import MoneyItem from './Items/MoneyItem';
import AddNewItem from './Items/AddNewItem';


const IncomeList = props => {
	return(
		<>
			<View style = {{...styles.view, flex: 1}}>
				<Text style={styles.title}>¿Cuánto dinero obtendrás?</Text>
			</View>

			<View style = {{...styles.view, flex: 2, alignItems: 'stretch'}}>
				<FlatList
					contentContainerStyle ={{alignItems: 'stretch'}}
					data = {props.items}
					renderItem = {({item}) => createItem(item)}
				/>
			</View>
		</>
	);
}

const createItem = (item) =>{
	let itemComponent;

	if(!item.isLast){
		itemComponent = (
			<MoneyItem/>
		);
	}else{
		itemComponent = (
			<AddNewItem/>
		);
	}

	return itemComponent;
}

const styles = StyleSheet.create({
	view:{
		justifyContent:"center",
		alignItems:"center",
	},
	title:{
		fontFamily: 'roboto',
		fontSize: 32,
		color:'#fff',

		textAlign:'center',
		textAlignVertical:'center'
	}

});


export default IncomeList;