import React from 'react';

import { StyleSheet, View, Image, Text, Dimensions, ScrollView } from 'react-native';
import Colors from '../../assets/constants/Colors';

import Translation, { Keys } from '../../translation/TranslationHelper';

const AboutHeader = props => {
	const flex =  props.flex ? props.flex : 1;

	return (
		<ScrollView
			contentContainerStyle = { {justifyContent: "flex-start", alignItems: "center", flexGrow: 1} } 
			style = { {...styles.mainContainer, flex: flex} }>
			<Image source = { props.logo } style = { styles.mainLogo }/>

			<Text style = { styles.title } > { props.appName } </Text>
			
			<View style = { styles.infoContainer }>
				<Text style = { styles.titleInfoText }> { `${Translation.getStringValue(Keys.app_version_text)}:` } </Text>
				<Text style = { styles.infoText }> { props.version } </Text>
			</View>
			
			<View style = { styles.infoContainer }>
				<Text style = { styles.titleInfoText }> { `${Translation.getStringValue(Keys.source_about_text)}:` } </Text>
				<Text style = { styles.infoText }> { props.sourceCode } </Text>
			</View>
			
			<Text style = { styles.footerText }> { props.license } </Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mainContainer:{
		marginBottom: 16,
	},
	mainLogo: {
		width: Dimensions.get("window").width / 4,
		height: Dimensions.get("window").width / 4,
		resizeMode: "center"
	},
	title: {
		textAlign: "center",
		
		fontSize: 24,
		fontFamily: "roboto-bold",
		color: Colors.fontColorLight,
		marginBottom:8,
	},
	infoContainer: {
		width: "80%",

		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 8
	},
	titleInfoText: {
		flex: 1,
		marginEnd: 4,
		fontSize: 16,
		fontFamily: "roboto-bold",
		color: Colors.fontColorLight,
		textAlign: "right"
	},
	infoText: {
		flex: 1,
		fontSize: 14,
		fontFamily: "roboto",
		color: Colors.fontColorLight,
		textAlignVertical: "center"
	},
	footerText: {
		textAlign: "center",
		fontSize: 16,
		fontStyle: "italic",
		fontFamily: "roboto",
		color: Colors.fontColorLight,
	}
});

export default AboutHeader;