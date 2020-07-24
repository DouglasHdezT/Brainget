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
import Dimens from '../../../assets/constants/Dimens';

import Translation, { Keys } from '../../../translation/TranslationHelper';
import DividerVertical from '../../design/DividerVertical';

const LabelAsidesInput = props => {

	const PERCENTAGE = Translation.getStringValue(Keys.percentage_modal_field_text);
	const CASH = Translation.getStringValue(Keys.cash_modal_field_text);
	const ADD = Translation.getStringValue(Keys.add_modal_field_text);
	const REPLACE = Translation.getStringValue(Keys.replace_modal_field_text);
	
	return (
		<View style={styles.container}>
			<Text style={styles.title}> { Translation.getStringValue(Keys.amount_modal_field_text) } </Text>
			<View style={styles.inputContainer}>
				{props.isNew || <OptionsModalButton
					items = { [ADD, REPLACE] }
					onChange = { (value, index) => { props.changeHandler('isAdding', index === 0 ? true : false) } }
					value = { props.isAdding ? "+" : "=" }
					direction = { DOWN } 
					small
					dark
					leftIcon
				/>}


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
		paddingHorizontal: 16,
		marginBottom: 4, 

		color: '#000',
		fontFamily: 'roboto',
		fontSize: Dimens.p,

		textAlign: "right",
		textAlignVertical: "center",
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: "center",

		marginHorizontal: 2,
		padding: 8,
		paddingStart: 8,
		justifyContent: "space-between",

		borderStyle: "solid",
		borderColor: Dimens.gray800,
		borderWidth: 1,


		borderTopStartRadius: 15,
		borderBottomEndRadius: 15,
	},
	input: {
		flex: 2.5,
		paddingHorizontal: 8,

		fontFamily: 'roboto',
		fontSize: Dimens.p ,

		color: Colors.inputText,
	}
});

export default LabelAsidesInput;