/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import  Colors  from '../../../assets/constants/Colors';
import  Dimens  from '../../../assets/constants/Dimens';

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
		fontSize: Dimens.h,
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

		fontSize: Dimens.p,
		fontFamily:'roboto',
		color: Colors.inputText
	}
});

export default LabeledInput;