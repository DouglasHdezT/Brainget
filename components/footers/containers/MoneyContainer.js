import React from 'react';

import { StyleSheet, View, Image, Text } from 'react-native';

import Icons from '../../../assets/constants/Icons';

const MoneyContainer = props => {
	return(
		<View style = {styles.container}>
			<Image style = {styles.icon} source = {Icons.cash}/>
			<Text style = {styles.text}> $ {props.money}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		width:'100%',
		flex:1,

		flexDirection: 'row',
		justifyContent: 'center',
		alignItems:'center'
	},
	text:{
		textAlign: 'center',
		textAlignVertical:'center',

		fontSize: 20,
		fontFamily: 'roboto',

		color:'#fff',

		flex: 3
	}, 
	icon:{
		flex:1,
		resizeMode:'contain',
	}
});

export default MoneyContainer;