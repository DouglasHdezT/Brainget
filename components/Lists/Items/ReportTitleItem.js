import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

import Icons from '../../../assets/constants/Icons';
import Colors from '../../../assets/constants/Colors';

const ReportTitleItem = props => {
	const { title } = props;

	const borderTop = props.first ? 15 : 0;
	const borderBot = props.last ? 15 : 0;

	return(
		<View 
			style = {{
				...styles.container, 
				backgroundColor: "#fff", 
				borderBottomEndRadius: borderBot, 
				borderTopStartRadius: borderTop,
			}}>

			<Text style = { styles.title }> { title } </Text>
			<Image style = { styles.icon } source = { Icons.down_gray }/>

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
		borderBottomColor:Colors.gray200,
		borderBottomWidth:1, 
	},
	title:{
		flex: 6,

		textAlignVertical: "center",
		textAlign: "left",

		fontFamily: 'roboto-bold',
		fontSize: 20,
		color: Colors.gray600,
	},
	icon:{
		flex: .5,
		maxHeight: 32,
		resizeMode: "contain",
		marginHorizontal:8
	}

});

export default ReportTitleItem;