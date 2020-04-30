import React from 'react';

import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import Colors from '../../assets/constants/Colors';

const ServicesHeader = props => {
	const flex = props.flex ? props.flex : 1;

	return (
		<View style = { {...styles.mainContainer, flex:flex} }>
			<View style = { styles.imageContainer }>
				<Image style = { styles.mainImage } source = { props.image }/>
			</View>
			<Text style = { styles.title }> { props.title } </Text>
			<Text style = { styles.subtitle }> { props.subtitle } </Text>
			<Text style = { styles.subtitle }> { props.text } </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		width: "100%",
		marginBottom: 16,
		alignItems: "center"
	},
	imageContainer: {
		flex: 4,
		width: Dimensions.get("window").width * 2/5 ,
		marginBottom:4,
	},
	mainImage: {
		height: "100%",
		width: "100%",
		resizeMode: "cover",

		borderBottomRightRadius: 15,
		borderTopLeftRadius:15,
	},
	title: {
		flex: 1,

		fontFamily: 'roboto-bold',
		fontSize: 20,
		color: Colors.fontColorLight,
		textAlign: "center",
		textAlignVertical: "center",
	},
	subtitle: {
		flex: 1,

		fontFamily: 'roboto',
		fontSize: 16,
		color: Colors.fontColorLight,
		textAlign: "center",
		textAlignVertical: "center",
	},
});

export default ServicesHeader;