/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import OptionsModalButton, {DOWN} from '../../buttons/OptionsModalButton';

import Colors from '../../../assets/constants/Colors';

import Translation, { Keys } from '../../../translation/TranslationHelper';

const LabelAsidesInput = props => {

	const PERCENTAGE = Translation.getStringValue(Keys.percentage_modal_field_text);
const CASH = Translation.getStringValue(Keys.cash_modal_field_text);
	
	return (
		<View style={styles.container}>
			<Text style={styles.title}> { Translation.getStringValue(Keys.amount_modal_field_text) } </Text>
			<View style={styles.inputContainer}>

				<TextInput
					onChangeText={text => props.changeHandler(props.id, text)}
					value={props.value}
					style={styles.input}
					placeholder='00.00'
					keyboardType='numeric'
				/>

				<OptionsModalButton
					items = { [CASH, PERCENTAGE] }
					onChange = { (value, index) => { props.changeHandler('isPercent', index === 1 ? true : false) } }
					value = { props.isPercent ? "%" : "$" }
					direction = { DOWN } 
					small
					dark
					/>
			</View>
			
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		justifyContent: "center",
		alignItems: "flex-start",
	},
	title: {
		flex: 1,
		paddingHorizontal: 16,

		color: '#000',
		fontFamily: 'roboto',
		fontSize: 16,

		textAlign: "right",
		textAlignVertical: "center",
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: "center",

		marginHorizontal: 2,
		padding: 8,
		justifyContent: "flex-start",

		borderStyle: "solid",
		borderColor: Colors.gray800,
		borderWidth: 1,


		borderTopStartRadius: 15,
		borderBottomEndRadius: 15,
	},
	input: {
		flex: 2,
		paddingHorizontal: 8,

		fontFamily: 'roboto',
		fontSize: 16,

		color: Colors.inputText,
	}
});

export default LabelAsidesInput;