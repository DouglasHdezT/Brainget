import React from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import  Colors  from '../../../assets/constants/Colors';

const LabeledInput = props => {
	return(
		<View style = {styles.container}>
			<Text style = {styles.text}> {props.label} </Text>
			<View style = {styles.textInputContainer}>
				<Text style = {{...styles.text, color:'#000', marginBottom:0}}>$</Text>
				<TextInput 
					value = {props.value}
					onChangeText = {text => props.changeHandler(props.id, text)}
					style = {styles.textInput} 
					keyboardType= 'number-pad' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		width: '100%',
		flex:1,

		justifyContent:'center',
		alignItems:'stretch',
		marginVertical: 8,
	},
	text:{
		fontFamily: 'roboto',
		fontSize: 24,
		color: "#fff",


		marginBottom: 8,
	},
	textInputContainer:{
		marginLeft:24,
		paddingLeft:16,

		flexDirection:'row',
		justifyContent:"space-between",
		alignItems:"center",

		backgroundColor:'#fff',
		borderBottomEndRadius:15,
		borderTopStartRadius:15,
	},
	textInput:{
		flex:1,
		paddingLeft:16,
		
		marginVertical:12,

		fontSize: 16,
		fontFamily:'roboto',
		color: Colors.inputText
	}
});

export default LabeledInput;