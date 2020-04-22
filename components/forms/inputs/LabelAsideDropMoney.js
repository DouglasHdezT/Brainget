import React from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import RNPicker from 'react-native-picker-select';
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
		marginTop:8
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