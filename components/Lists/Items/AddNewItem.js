import React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Icons from '../../../assets/constants/Icons';
import Colors from '../../../assets/constants/Colors';

const AddNewItem = props => {
	return(
		<TouchableOpacity style = {styles.container}>
			<View style = {styles.textContainer}>
				<Text style = {styles.title}>Añadir ingreso</Text>
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

		paddingVertical:8,
		paddingHorizontal:16,

		backgroundColor:'#fff',

		borderBottomEndRadius: 15,
		borderTopStartRadius: 15,

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
		fontSize: 24,

		textAlign: "center",
		textAlignVertical: "center",
	},
})

export default AddNewItem;