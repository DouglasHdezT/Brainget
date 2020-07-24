/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { useState } from 'react';

import { StyleSheet, View, Button, ScrollView, Text, TouchableOpacity } from 'react-native';
import StyledText from 'react-native-styled-text';

import Colors from '../assets/constants/Colors';
import Dimens from '../assets/constants/Dimens';

import terms from '../translation/strings/termsAndConditions';
import Translation, { Keys } from '../translation/TranslationHelper';

const TermScreen = ({onPress}) => {
	const [btnDisabled, setDisable] = useState(true);

	return(
		<View style = { styles.container }>
			<Text style = {styles.title}>{ Translation.getStringValue(Keys.license_title) }</Text>
			
			<ScrollView style = {{ flex: 1, marginBottom: 8, paddingVertical: 16, paddingHorizontal: 24}}>
				<StyledText style = {styles.termsText} children = { terms.text } />
			</ScrollView>

			<TouchableOpacity onPress = { onPress } style = {{
				padding: 12,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: Colors.blue500
			}}>

				<Text style = {{
					fontFamily: "roboto",
					fontSize: Dimens.h - 4,
					color: "#fff"
				}}> 
					{ Translation.getStringValue(Keys.accept_text) }
				</Text>

			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eee"
	},
	termsText: {
		textAlign: "justify",
		fontFamily: "roboto",
		fontSize: Dimens.p
	},
	title: {
		textAlign: "center",
		fontFamily: "roboto",
		color: "white",
		fontSize:Dimens.h,

		backgroundColor: Colors.blue900,

		padding: 16,
		paddingTop: 32,
		
		borderBottomEndRadius: 15,
		borderBottomStartRadius: 15,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	}
});

export default TermScreen;