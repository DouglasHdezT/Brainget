/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View, Image, Text } from 'react-native';

import Icons from '../../../assets/constants/Icons';
import Dimens from '../../../assets/constants/Dimens';

const MoneyContainer = props => {
	return(
		<View style = {styles.container}>
			<Image style = {styles.icon} source = {Icons.cash}/>
			<Text style = {styles.text}> $ {props.money}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		width:'100%',
		flex:1,

		flexDirection: 'row',
		justifyContent: 'center',
		alignItems:'center'
	},
	text:{
		textAlign: 'center',
		textAlignVertical:'center',

		fontSize: Dimens.h - 4,
		fontFamily: 'roboto',

		color:'#fff',

		flex: 3
	}, 
	icon:{
		height: "100%",
		flex: 1,
		resizeMode:'contain',
	}
});

export default MoneyContainer;