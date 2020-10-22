/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import Colors from '../../assets/constants/Colors';
import Dimens from '../../assets/constants/Dimens';

const ServicesHeader = props => {
	const flex = props.flex ? props.flex : 1;

	return (
		<View style = { {...styles.mainContainer, flex:flex} }>
			<View style = { styles.imageContainer }>
				<Image style = { styles.mainImage } source = { props.image }/>
			</View>
			<Text style = { styles.title }> { props.title } </Text>
			<Text style = { styles.subtitle }> { props.subtitle } </Text>
			<Text style = { styles.subtitle }> { props.text } </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		width: "100%",
		marginBottom: 16,
		alignItems: "center"
	},
	imageContainer: {
		flex: 4,
		width: Dimensions.get("window").width * 2/5 ,
		marginBottom:4,
	},
	mainImage: {
		height: "100%",
		width: "100%",
		resizeMode: "cover",

		borderBottomRightRadius: 15,
		borderTopLeftRadius:15,
	},
	title: {
		flex: 1,

		fontFamily: 'roboto-bold',
		fontSize: Dimens.h,
		color: Colors.fontColorLight,
		textAlign: "center",
		textAlignVertical: "center",
	},
	subtitle: {
		flex: 1,

		fontFamily: 'roboto',
		fontSize: Dimens.p,
		color: Colors.fontColorLight,
		textAlign: "center",
		textAlignVertical: "center",
	},
});

export default ServicesHeader;