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

const MoneyItem = props => {
	const taxableIcon = (
		<Image style = { styles.taxableIcon } source = { Icons.tax_selected } />
	);

	const moneyColor = props.isTaxable === undefined ? Colors.green800 : Colors.red800;

	return(
		<View style = {styles.container}>
			<View style = {styles.textContainer}>
				<Text style = {styles.title}>{props.title}</Text>
				<Text style = {{...styles.subtitle, color: props.money > 0 ? moneyColor : Colors.ItemsSubtitles}}>$ {props.money.toFixed(2)}</Text>
				<Text style = {styles.subtitle}>{props.date}</Text>
			</View>

			{ props.isTaxable && taxableIcon } 

			<TouchableOpacity style = {{...styles.iconContainer, marginLeft: props.isTaxable ? 0 : 16}} onPress = {props.update}>
				<Image
					source = {Icons.edit}
					style = {styles.icon}	
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		height:'auto',

		paddingVertical:8,
		paddingHorizontal:16,
		marginBottom: 16,

		backgroundColor:'#fff',

		borderBottomEndRadius: 15,
		borderTopStartRadius: 15,

		flexDirection: 'row',
		justifyContent:'space-between',
		alignItems: "center"
	},
	textContainer:{
		flex:1,
		alignItems:'stretch',
		justifyContent: 'center'
	},
	iconContainer:{
		width: '10%',
		maxHeight:32,
		justifyContent:"center",
		alignItems:'center',
	},
	icon:{
		width:'100%',
		height:'100%',
		resizeMode:'contain'
	},
	title:{
		fontFamily: 'roboto-bold',
		color: Colors.ItemsTitle,
		fontSize: Dimens.p,
	},
	subtitle:{
		fontFamily: 'roboto',
		color: Colors.ItemsSubtitles,
		fontSize: Dimens.p - 2,
	},
	taxableIcon: {
		maxWidth: 24,
		maxHeight: 24,
		resizeMode: "center",

		marginHorizontal: 16,
	}
})

export default MoneyItem;