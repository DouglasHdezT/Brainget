/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Icons from '../../../assets/constants/Icons';
import Colors from '../../../assets/constants/Colors';
import Dimens from '../../../assets/constants/Dimens';

import Translation, { Keys } from '../../../translation/TranslationHelper';

const AddNewItem = props => {
	return(
		<TouchableOpacity 
			onPress = {props.openAddModal}
			style = {styles.container}>
			<View style = {styles.textContainer}>
				<Text style = {styles.title}>{props.cost ? Translation.getStringValue(Keys.add_cost_action_text) : Translation.getStringValue(Keys.add_income_action_text)}</Text>
			</View>
			<View style = {styles.iconContainer}>
				<Image
					source = {Icons.add}
					style = {styles.icon}	
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container:{
		height:'auto',

		paddingVertical:16,
		paddingHorizontal:16,

		backgroundColor:Colors.indigo900,

		borderBottomEndRadius: 15,
		borderBottomStartRadius: 15,

		flexDirection: 'row',
		justifyContent:'space-between',
	},
	textContainer:{
		flex:1,
		alignItems:'stretch',
		justifyContent: "center",
		alignItems:"center"
	},
	iconContainer:{
		width: '10%',
		maxHeight:32,
		justifyContent:"center",
		alignItems:'center'
	},
	icon:{
		width: '100%',
		height: "100%",
		resizeMode:'center'
	},
	title:{
		fontFamily: 'roboto',
		color: 'white',
		fontSize: Dimens.h,
	},
})

export default AddNewItem;