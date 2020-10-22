/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Dimens from '../../assets/constants/Dimens';

const FootThreeTexts = props => {
	const textColor = props.dark ? "#000" : "#fff";

	return (
		<View style = {{...styles.mainContainer, ...props.style}}>
			<Text style = { {...styles.text, color: textColor} }> { props.text1 } </Text>
			<Text style = { {...styles.text, color: textColor, marginHorizontal: 8} }> { props.text2 } </Text>
			<Text style = { {...styles.text, color: textColor} }> { props.text3 } </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		padding: 8,

		flex: 1,
		maxHeight: 45,
		flexDirection:'row',

		justifyContent:"space-between",
		alignItems:"stretch",
	},
	text: {
		flex:1,

		textAlign: "center",
		textAlignVertical: "center",

		fontFamily: "roboto-bold",
		fontSize: Dimens.p,
	}
});

export default FootThreeTexts;