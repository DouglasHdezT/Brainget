/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Colors from '../../assets/constants/Colors';
import Dimens from '../../assets/constants/Dimens';

import Translation, {Keys} from '../../translation/TranslationHelper';

const DeveloperContent = props => {
	return (
		<View style = {{ flex:1, justifyContent:"space-around" }}>
			<Text style = { styles.logo } > {props.logo} </Text>

			<View>
				<Text style = { styles.title }> { props.name } </Text>
				<Text style = { styles.subtitle }> { props.specs } </Text>
			</View>

			<View>
				<Text style = { styles.textRowTitle }> { `${Translation.getStringValue(Keys.developer_email_text)}:` } </Text>
				<Text style = { {...styles.textRowSubtitle, marginBottom: 16} }> { props.email } </Text>
	
				<Text style = { styles.textRowTitle }> { `${Translation.getStringValue(Keys.developer_repository_text)}:` } </Text>
				<Text style = { styles.textRowSubtitle }> { props.repository } </Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	logo:{
		fontFamily:"roboto-bold",
		color: Colors.fontColorLight,
		fontSize: Dimensions.get("window").width/9,

		textAlign: "center",

		textShadowColor: Colors.red700,
		textShadowOffset: {width: 1, height: 1},
		textShadowRadius: 10,

		marginBottom: 16,
	},
	title:{
		fontFamily:"roboto-bold",
		color: Colors.fontColorLight,
		fontSize: Dimens.h,

		textAlign: "center",
	},
	subtitle: {
		fontFamily:"roboto",
		color: Colors.fontColorLight,
		fontSize: Dimens.p,

		textAlign: "center",
		marginBottom: 16,
	},
	textRowTitle: {

		fontFamily:"roboto-italic",
		color: Colors.fontColorLight,
		fontSize: Dimens.p,
		textAlign: "center"

	},
	textRowSubtitle: {

		fontFamily:"roboto",
		color: Colors.fontColorLight,
		fontSize: Dimens.p,

		textAlign: "center"
	}
});

export default DeveloperContent;