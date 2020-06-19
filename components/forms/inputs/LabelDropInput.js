/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View, TextInput, Text } from 'react-native';
import Colors from '../../../assets/constants/Colors';

import Translation, { Keys } from '../../../translation/TranslationHelper';
import OptionsModalButton, { DOWN } from '../../buttons/OptionsModalButton';

const LabelDropInput = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{ Translation.getStringValue(Keys.name_modal_field_text) }</Text>
			
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={text => props.changeHandler(props.id, text)}
					value={props.value}
					style={styles.input}
					placeholder={`p.e. ${props.options ? props.options[0] : ""}`}
				/>
				<OptionsModalButton
					dark
					small
					direction = { DOWN }
					items = { props.options ? props.options : [] }
					onChange = { (text, index) => props.changeHandler(props.id, text, index)  }
				/>				
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {

		justifyContent: "flex-start",
	},
	title: {
		paddingHorizontal: 16,
		marginBottom: 4,

		color: '#000',
		fontFamily: 'roboto',
		fontSize: 16,
	},
	inputContainer: {
		padding: 8,
		flexDirection:'row',
		alignItems: "stretch",

		borderStyle: "solid",
		borderWidth:1,
		borderColor: Colors.gray800,
		backgroundColor: '#fff',

		borderTopStartRadius: 15,
		borderBottomEndRadius: 15,

	},
	input: {
		flex:4,
		paddingHorizontal: 8,

		fontFamily: 'roboto',
		fontSize: 16,

		color: Colors.inputText,
	}
});

export default LabelDropInput;