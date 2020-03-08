import React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Icons from '../../../assets/constants/Icons';
import Colors from '../../../assets/constants/Colors';

const AddNewItem = props => {
	return(
		<TouchableOpacity 
			onPress = {props.openAddModal}
			style = {styles.container}>
			<View style = {styles.textContainer}>
				<Text style = {styles.title}>{props.cost ? 'Añadir gasto' : 'Añadir ingreso'}</Text>
			</View>
			<View style = {styles.iconContainer}>
				<Image
					source = {Icons.add}
					style = {styles.icon}	
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container:{
		height:'auto',

		paddingVertical:16,
		paddingHorizontal:16,

		backgroundColor:Colors.indigo900,

		borderBottomEndRadius: 15,
		borderBottomStartRadius: 15,

		flexDirection: 'row',
		justifyContent:'space-between',
	},
	textContainer:{
		flex:1,
		alignItems:'stretch',
		justifyContent: "center",
		alignItems:"center"
	},
	iconContainer:{
		width: '10%',
		maxHeight:32,
		justifyContent:"center",
		alignItems:'center'
	},
	icon:{
		width:'100%',
		resizeMode:'contain'
	},
	title:{
		fontFamily: 'roboto-bold',
		color: 'white',
		fontSize: 20,
	},
})

export default AddNewItem;