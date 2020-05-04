import React from 'react';

import { StyleSheet, ScrollView, Text } from 'react-native';
import Colors from '../../assets/constants/Colors';

const LicenceContent = props => {
	return (
		<ScrollView
			contentContainerStyle = {{ flexGrow:1, justifyContent: "center" }}
			style = {{flex:1}}>

			<Text style = { styles.title }> { props.title } </Text>
			<Text style = { styles.contentText }> { props.license } </Text>

		</ScrollView>
	);
}

const styles = StyleSheet.create({
	title:{
		fontSize: 24,
		fontFamily: "roboto-bold",
		color: Colors.fontColorLight,

		textAlignVertical: "center",
		textAlign: "center",
		marginBottom: 16
	},
	contentText: {
		fontSize: 16,
		fontFamily: "roboto",
		color: Colors.fontColorLight,

		textAlign: "justify"
	}
});

export default LicenceContent;