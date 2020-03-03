import React from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import Colors from '../../../assets/constants/Colors';

const LabelAsidesInput = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Cantidad: </Text>
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={text => props.changeHandler(props.id, text)}
					value={props.value ? props.value : 0}
					style={styles.input}
					keyboardType='decimal-pad'
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",

		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		flex: 1,
		paddingHorizontal: 16,
		marginHorizontal: 4,

		color: '#000',
		fontFamily: 'roboto',
		fontSize: 20,

		textAlign: "right",
		textAlignVertical: "center",
	},
	inputContainer: {
		flex: 1,
		marginHorizontal: 4,
		padding: 8,
		justifyContent: "center",

		borderStyle: "solid",
		borderColor: Colors.gray800,
		borderWidth:1,


		borderTopStartRadius: 15,
		borderBottomEndRadius: 15,
	},
	input: {
		paddingHorizontal: 8,

		fontFamily: 'roboto',
		fontSize: 16,
	}
});

export default LabelAsidesInput;