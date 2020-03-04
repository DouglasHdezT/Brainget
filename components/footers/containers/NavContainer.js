import React from 'react';

import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icons from '../../../assets/constants/Icons';

const NavContainer = props => {

	const text = props.left ? 'Anterior' : 'Siguiente';
	const icon = props.left ? Icons.left : Icons.right;

	const textComponent = <Text style = {styles.text}>{text}</Text>;
	const iconComponent = <Image source = {icon} style = {styles.icon}/>

	return(
		<TouchableOpacity onPress = {props.onPress} style = {styles.container}>
			{props.left ? iconComponent : textComponent}
			{props.left ? textComponent : iconComponent}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container:{
		width:'100%',
		flex:1,

		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	iconContainer:{
		width:'10%',
		justifyContent:"center",
		alignItems:'center'
	},
	icon:{
		flex:1,
		resizeMode: 'contain',
	},
	text:{
		flex:5,
		fontFamily:'roboto',
		fontSize: 20,
		color:'#fff',

		textAlignVertical:"center",
		textAlign:"center"
	}
});

export default NavContainer;