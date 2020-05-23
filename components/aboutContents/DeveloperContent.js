import React from 'react';

import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Colors from '../../assets/constants/Colors';

import Translation, {Keys} from '../../translation/TranslationHelper';

const DeveloperContent = props => {
	return (
		<View style = {{ flex:1, justifyContent:"space-around" }}>
			<Text style = { styles.logo } > {props.logo} </Text>

			<View>
				<Text style = { styles.title }> { props.name } </Text>
				<Text style = { styles.subtitle }> { props.specs } </Text>
			</View>

			<View>
				<Text style = { styles.textRowTitle }> { `${Translation.getStringValue(Keys.developer_email_text)}:` } </Text>
				<Text style = { {...styles.textRowSubtitle, marginBottom: 16} }> { props.email } </Text>
	
				<Text style = { styles.textRowTitle }> { `${Translation.getStringValue(Keys.developer_repository_text)}:` } </Text>
				<Text style = { styles.textRowSubtitle }> { props.repository } </Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	logo:{
		fontFamily:"roboto-bold",
		color: Colors.fontColorLight,
		fontSize: Dimensions.get("window").width/9,

		textAlign: "center",

		textShadowColor: Colors.red700,
		textShadowOffset: {width: 1, height: 1},
		textShadowRadius: 10,

		marginBottom: 16,
	},
	title:{
		fontFamily:"roboto-bold",
		color: Colors.fontColorLight,
		fontSize: 20,

		textAlign: "center",
	},
	subtitle: {
		fontFamily:"roboto",
		color: Colors.fontColorLight,
		fontSize: 16,

		textAlign: "center",
		marginBottom: 16,
	},
	textRowTitle: {

		fontFamily:"roboto-italic",
		color: Colors.fontColorLight,
		fontSize: 16,
		textAlign: "center"

	},
	textRowSubtitle: {

		fontFamily:"roboto",
		color: Colors.fontColorLight,
		fontSize: 16,

		textAlign: "center"
	}
});

export default DeveloperContent;