import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../../assets/constants/Colors';

const SingleReportItem = props => {
	return (
		<View style = {styles.container} >
			<Text style = {styles.title}> {props.title} </Text>
			<Text style = {styles.subtitle}>{ `$ ${props.money}` }</Text>
			<Text style = {styles.subtitle}>{ props.date }</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width:"100%",
		padding: 8,
	},
	title:{
		paddingVertical: 2,

		fontFamily: 'roboto',
		fontSize: 16,
		color: "#000",
	},
	subtitle:{
		paddingVertical: 2,

		fontFamily: 'roboto',
		fontSize: 14,
		color: Colors.gray800,
	}
});

export default SingleReportItem;