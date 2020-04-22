import React, { Component } from 'react';

import { View, FlatList, Text, StyleSheet } from 'react-native';
import MoneyItem from './Items/MoneyItem';
import AddNewItem from './Items/AddNewItem';

import Translation, { Keys } from '../../translation/TranslationHelper'


const IncomeList = props => {

	const createItem = (item) => (
		<MoneyItem 
			update = {() => props.openAddModal(false, item._id)}
			title = {item.title} 
			money = {item.money} 
			date = {item.createdAt}/>);

	return(
		<>
			<View style = {{...styles.view, flex: 1}}>
				<Text style={styles.title}> { Translation.getStringValue(Keys.goals_screen_section_1_title) } </Text>
			</View>

			<View style = {{...styles.view, flex: 3, alignItems: 'stretch'}}>
				<FlatList
					contentContainerStyle ={{alignItems: 'stretch'}}
					data = {props.items}
					renderItem = {({item}) => createItem(item)}
					keyExtractor = {item => item._id}
				/>
				<AddNewItem openAddModal = {() => props.openAddModal(true)}/>
			</View>
		</>
	);
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