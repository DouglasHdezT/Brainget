/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icons from '../../../assets/constants/Icons';
import Dimens from '../../../assets/constants/Dimens';

import Translation, { Keys } from '../../../translation/TranslationHelper'

const NavContainer = props => {

	const text = props.left ? Translation.getStringValue(Keys.previous_action_text) : Translation.getStringValue(Keys.next_action_text);
	const icon = props.left ? Icons.left : Icons.right;

	const textComponent = <Text style = {styles.text}>{text}</Text>;
	const iconComponent = <Image source = {icon} style = {styles.icon}/>

	return(
		<TouchableOpacity onPress = {props.onPress} style = {styles.container}>
			{props.left ? iconComponent : textComponent}
			{props.left ? textComponent : iconComponent}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container:{
		width:'100%',
		flex:1,

		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	iconContainer:{
		width:'10%',
		justifyContent:"center",
		alignItems:'center'
	},
	icon:{
		flex: 1,
		height: "100%",
		resizeMode: 'contain',
	},
	text:{
		flex:5,
		fontFamily:'roboto',
		fontSize: Dimens.h - 4,
		color:'#fff',

		textAlignVertical:"center",
		textAlign:"center"
	}
});

export default NavContainer;