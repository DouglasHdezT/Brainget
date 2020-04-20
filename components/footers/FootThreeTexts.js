import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const FootThreeTexts = props => {
	const textColor = props.dark ? "#000" : "#fff";

	return (
		<View style = {{...styles.mainContainer, ...props.style}}>
			<Text style = { {...styles.text, color: textColor} }> { props.text1 } </Text>
			<Text style = { {...styles.text, color: textColor, marginHorizontal: 8} }> { props.text2 } </Text>
			<Text style = { {...styles.text, color: textColor} }> { props.text3 } </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		padding: 8,

		flex: 1,
		maxHeight: 45,
		flexDirection:'row',

		justifyContent:"space-between",
		alignItems:"stretch",
	},
	text: {
		flex:1,

		textAlign: "center",
		textAlignVertical: "center",

		fontFamily: "roboto-bold",
		fontSize: 16,
	}
});

export default FootThreeTexts;