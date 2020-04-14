import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

import Colors from '../../../assets/constants/Colors';
import Icons from '../../../assets/constants/Icons';

const ResultTitleItem = props => {
	const { title, totalBalance } = props;

	const bgColor = totalBalance < 0 ? Colors.red700 : Colors.green700;

	const borderTop = props.first ? 15 : 0;
	const borderBot = props.last ? 15 : 0;

	return(
		<View 
			style = {{
				...styles.container, 
				backgroundColor: bgColor, 
				borderBottomEndRadius: borderBot, 
				borderTopStartRadius: borderTop,
			}}>

			<Text style = { styles.title }> { title } </Text>
			<Text style = { styles.money } > { `$ ${totalBalance.toFixed(2)}` } </Text>
			<Image style = { styles.icon } source = { Icons.down }/>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 8,
		paddingVertical: 8,
		flexDirection: "row",

		alignItems: "center",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	title:{
		flex: 3,

		textAlignVertical: "center",
		textAlign: "left",

		fontFamily: 'roboto-bold',
		fontSize: 20,
		color: "#fff",
	},
	money:{
		flex: 3,

		textAlignVertical: "center",
		textAlign: "right",

		fontFamily: 'roboto',
		fontSize: 20,
		color: "#fff",
	},
	icon:{
		flex: .5,
		maxHeight: 32,
		resizeMode: "contain",
		marginHorizontal:8
	}

});

export default ResultTitleItem;