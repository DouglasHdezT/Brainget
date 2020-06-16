/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import Colors from '../../../assets/constants/Colors';
import Icons from '../../../assets/constants/Icons';

const SingleReportItem = props => {
	const taxableIcon = (
		<View style = { styles.iconContainer }>
			<Image style = { styles.icon } source = { Icons.tax_unselected } />
		</View>
	);
	return (
		<View style = {styles.container} >
			<View style = { styles.textContainer }>
				<Text style = {styles.title}> {props.title} </Text>
				<Text style = {styles.subtitle}>{ `$ ${props.money}` }</Text>
				<Text style = {styles.subtitle}>{ props.date }</Text>
			</View>
			{ props.isTaxable && taxableIcon }
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width:"100%",
		padding: 8,

		flexDirection:"row",
	},
	textContainer: {
		flex:2
	},
	iconContainer: {
		flex:1,
		justifyContent: "center",
		alignItems:"center",

		marginHorizontal: 24,
	},
	icon:{
		maxHeight:24,
		maxWidth:24, 
		resizeMode:"center"
	},
	title:{
		paddingVertical: 2,

		fontFamily: 'roboto',
		fontSize: 16,
		color: "#000",
	},
	subtitle:{
		paddingVertical: 2,

		fontFamily: 'roboto',
		fontSize: 14,
		color: Colors.gray800,
	}
});

export default SingleReportItem;