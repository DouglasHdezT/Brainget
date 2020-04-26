import React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Icons from '../../../assets/constants/Icons';
import Colors from '../../../assets/constants/Colors';

const MoneyItem = props => {
	const taxableIcon = (
		<Image style = { styles.taxableIcon } source = { Icons.tax_unselected } />
	);
	return(
		<View style = {styles.container}>
			<View style = {styles.textContainer}>
				<Text style = {styles.title}>{props.title}</Text>
				<Text style = {styles.subtitle}>$ {props.money.toFixed(2)}</Text>
				<Text style = {styles.subtitle}>{props.date}</Text>
			</View>

			{ props.isTaxable && taxableIcon } 

			<TouchableOpacity style = {{...styles.iconContainer, marginLeft: props.isTaxable ? 0 : 16}} onPress = {props.update}>
				<Image
					source = {Icons.edit}
					style = {styles.icon}	
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		height:'auto',

		paddingVertical:8,
		paddingHorizontal:16,
		marginBottom: 16,

		backgroundColor:'#fff',

		borderBottomEndRadius: 15,
		borderTopStartRadius: 15,

		flexDirection: 'row',
		justifyContent:'space-between',
		alignItems: "center"
	},
	textContainer:{
		flex:1,
		alignItems:'stretch',
		justifyContent: 'center'
	},
	iconContainer:{
		width: '10%',
		justifyContent:"center",
		alignItems:'center',
	},
	icon:{
		width:'100%',
		resizeMode:'contain'
	},
	title:{
		fontFamily: 'roboto-bold',
		color: Colors.ItemsTitle,
		fontSize: 16,
	},
	subtitle:{
		fontFamily: 'roboto',
		color: Colors.ItemsSubtitles,
		fontSize: 14,
	},
	taxableIcon: {
		maxWidth: 24,
		maxHeight: 24,
		resizeMode: "center",

		marginHorizontal: 16,
	}
})

export default MoneyItem;