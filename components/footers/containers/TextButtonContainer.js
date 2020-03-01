import React from 'react';

import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const TextButtonContainer = props => {
	return (
		<TouchableOpacity
			style = {styles.container}
			onPress = {props.onPress}>
			<Text style = {styles.text}>{props.text}</Text>
		</TouchableOpacity>
	);	
}

const styles = StyleSheet.create({
	container:{
		width:'100%',
		flex:1,

		justifyContent: 'center',
		alignItems:'center'
	},
	text:{
		fontSize: 20,
		fontFamily: 'roboto',

		color:'#fff',
	},
});

export default TextButtonContainer;