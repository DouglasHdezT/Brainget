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
import Dimens from '../../../assets/constants/Dimens';

const ResultTitleItem = props => {
	const { title, totalBalance } = props;

	const bgColor = totalBalance < 0 ? Colors.red700 : Colors.green700;

	const borderTop = props.first ? 15 : 0;
	const borderBot = props.last ? 15 : 0;

	return(
		<View 
			style = {{
				...styles.container, 
				backgroundColor: bgColor, 
				borderBottomEndRadius: borderBot, 
				borderTopStartRadius: borderTop,
			}}>

			<Text style = { styles.title }> { title } </Text>
			<Text style = { styles.money } > { `$ ${totalBalance.toFixed(2)}` } </Text>
			<Image style = { styles.icon } source = { Icons.down }/>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 8,
		paddingVertical: 8,
		flexDirection: "row",

		alignItems: "center",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	title:{
		flex: 3,

		textAlignVertical: "center",
		textAlign: "left",

		fontFamily: 'roboto-bold',
		fontSize: Dimens.h - 4,
		color: "#fff",
	},
	money:{
		flex: 3,

		textAlignVertical: "center",
		textAlign: "right",

		fontFamily: 'roboto',
		fontSize: Dimens.h - 4,
		color: "#fff",
	},
	icon:{
		flex: .5,
		maxHeight: 32,
		resizeMode: "contain",
		marginHorizontal:8
	}

});

export default ResultTitleItem;