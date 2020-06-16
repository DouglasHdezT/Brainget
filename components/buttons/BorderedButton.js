/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BorderedButton = props => {
	return (
		<View style = {{...styles.container, backgroundColor: props.color}}>
			<TouchableOpacity
				onPress={props.onPress}>
				<Text style = {{...styles.text, fontSize: props.small ? 16 : 20}}>{props.text}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		minHeight: 30,
		maxHeight: 75,

		paddingHorizontal: 16,
		paddingVertical: 8,
		marginHorizontal:8,

		justifyContent: "center",

		borderBottomEndRadius: 15,
		borderTopStartRadius: 15,
	}, 
	text:{
		color: '#fff',
		fontFamily: 'roboto',
		fontSize: 20,

		textAlign: "center",
	}

});

export default BorderedButton;