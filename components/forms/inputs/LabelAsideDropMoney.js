import React from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import RNPicker from 'react-native-picker-select';
import Colors from '../../../assets/constants/Colors';

const LabelAsidesInput = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Monto</Text>
			<View style={styles.inputContainer}>

				<TextInput
					onChangeText={text => props.changeHandler(props.id, text)}
					value={props.value}
					style={styles.input}
					placeholder='00.00'
					keyboardType='numeric'
				/>

				<RNPicker
					onValueChange={(value) => { props.changeHandler('isPercent', value) }}
					placeholder = {{}}
					style={{viewContainer : {flex:1 , alignSelf : 'center'}}}
					value={props.isPercent}
					items={[
						{ label: '$', value: false },
						{ label: '%', value: true }
					]}
				/>	
				{/* <Picker
					style = {{flex:1,}}
					selectedValue = {props.isPercent}
					onValueChange = {value => {props.changeHandler('isPercent', value)}}
					>
					<Picker.Item label="$" value={false} />
  					<Picker.Item label="%" value={true} />
				</Picker> */}
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