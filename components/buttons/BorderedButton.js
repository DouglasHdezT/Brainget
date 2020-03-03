import React from 'react';

import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BorderedButton = props => {
	return (
		<View style = {{...styles.container, backgroundColor: props.color}}>
			<TouchableOpacity
				onPress={props.onPress}>
				<Text style = {styles.text}>{props.text}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		minHeight: 50,

		paddingHorizontal: 16,
		paddingVertical: 8,
		marginHorizontal:8,

		justifyContent: "center",

		borderBottomEndRadius: 15,
		borderTopStartRadius: 15,
	}, 
	text:{
		color: '#fff',
		fontFamily: 'roboto',
		fontSize: 20,

		textAlign: "center",
	}

});

export default BorderedButton;