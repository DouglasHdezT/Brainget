import React from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';

const MoneyPeriodFootPanel = props => {
	
	return (
		<View style = {styles.container}>
			<View style = {{...styles.box, backgroundColor: props.leftPanelColor}}>
				<Image style = {styles.icon} source = {require('../../assets/img/cash.png')}/>
				<Text style = {{...styles.text, fontSize: 20}}> $ {props.money}</Text>
			</View>
			<View style = {{...styles.box, backgroundColor: props.rightPanelColor, flexDirection: 'column'}}>
				<Text style = {styles.text}> Periodo</Text>
				<Text style = {styles.text}> { props.period }</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:'row',
	},
	box:{
		flex:1,
		padding: 8,
		
		flexDirection:'row',

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
	icon:{
		flex:1,
		resizeMode:'contain',
	}
});

export default MoneyPeriodFootPanel;