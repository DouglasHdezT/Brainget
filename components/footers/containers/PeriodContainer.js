import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const PeriodContainer = props => {
	return(
		<View>
			<Text style = {styles.text}> Periodo</Text>
			<Text style = {styles.text}> { props.period }</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		width:'100%',
		flex:1,

		flexDirection: 'column',
		justifyContent: 'center',
		alignItems:'center'
	},
	text:{
		textAlign: 'center',
		textAlignVertical:'center',

		fontSize: 16,
		fontFamily: 'roboto',

		color:'#fff',

		flex: 3
	},
});

export default PeriodContainer;