import React from 'react';

import { StyleSheet, View, TextInput, Text, } from 'react-native';
import Colors from '../../../assets/constants/Colors';

const LabelDropInput = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Nombre</Text>
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={text => props.changeHandler(props.id, text)}
					value={props.value}
					style={styles.input}
					placeholder="p.e. Préstamo casa"
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

		color: '#000',
		fontFamily: 'roboto',
		fontSize: 20,
	},
	inputContainer: {
		padding: 8,
		justifyContent: "center",

		borderStyle: "solid",
		borderWidth:1,
		borderColor: Colors.gray800,

		borderTopStartRadius: 15,
		borderBottomEndRadius: 15,
	},
	input: {
		paddingHorizontal: 8,

		fontFamily: 'roboto',
		fontSize: 16,
	}
});

export default LabelDropInput;