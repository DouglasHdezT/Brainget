import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import Colors from '../../../assets/constants/Colors';
import Icons from '../../../assets/constants/Icons';

const SingleReportItem = props => {
	const taxableIcon = (
		<View style = { styles.iconContainer }>
			<Image style = { styles.icon } source = { Icons.tax_unselected } />
		</View>
	);
	return (
		<View style = {styles.container} >
			<View style = { styles.textContainer }>
				<Text style = {styles.title}> {props.title} </Text>
				<Text style = {styles.subtitle}>{ `$ ${props.money}` }</Text>
				<Text style = {styles.subtitle}>{ props.date }</Text>
			</View>
			{ props.isTaxable && taxableIcon }
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width:"100%",
		padding: 8,

		flexDirection:"row",
	},
	textContainer: {
		flex:2
	},
	iconContainer: {
		flex:1,
		justifyContent: "center",
		alignItems:"center",

		marginHorizontal: 24,
	},
	icon:{
		maxHeight:24,
		maxWidth:24, 
		resizeMode:"center"
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