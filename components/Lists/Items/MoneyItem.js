import React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Icons from '../../../assets/constants/Icons';
import Colors from '../../../assets/constants/Colors';

const MoneyItem = props => {
	return(
		<View style = {styles.container}>
			<View style = {styles.textContainer}>
				<Text style = {styles.title}>{props.title}</Text>
				<Text style = {styles.subtitle}>$ {props.money.toFixed(2)}</Text>
				<Text style = {styles.subtitle}>{props.date}</Text>
			</View>
			<TouchableOpacity style = {styles.iconContainer} onPress = {props.update}>
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
	},
	textContainer:{
		width:'50%',
		alignItems:'stretch',
		justifyContent: 'center'
	},
	iconContainer:{
		width: '10%',
		justifyContent:"center",
		alignItems:'center'
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
	}
})

export default MoneyItem;