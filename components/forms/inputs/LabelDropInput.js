import React from 'react';

import { StyleSheet, View, TextInput, Text } from 'react-native';
import Colors from '../../../assets/constants/Colors';

import Translation, { Keys } from '../../../translation/TranslationHelper';

const LabelDropInput = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{ Translation.getStringValue(Keys.name_modal_field_text) }</Text>
			
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={text => props.changeHandler(props.id, text)}
					value={props.value}
					style={styles.input}
					placeholder="p.e. Alquiler casa"
				/>
				
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		justifyContent: "center",
	},
	title: {
		paddingHorizontal: 16,
		marginBottom: 4,
		flex:1,

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
		flex:1,
		paddingHorizontal: 8,

		fontFamily: 'roboto',
		fontSize: 16,

		color: Colors.inputText,
	}
});

export default LabelDropInput;