import React, { useState } from 'react';

import { StyleSheet, View, Button, ScrollView, Text } from 'react-native';
import StyledText from 'react-native-styled-text';

import BorderedButton from '../components/buttons/BorderedButton';

import Colors from '../assets/constants/Colors';

import terms from '../translation/strings/termsAndConditions';
import Translation, { Keys } from '../translation/TranslationHelper';

const TermScreen = ({onPress}) => {
	const [btnDisabled, setDisable] = useState(true);

	return(
		<View style = { styles.container }>
			<Text style = {styles.title}>{ Translation.getStringValue(Keys.license_title) }</Text>
			
			<ScrollView style = {{ flex: 1, marginBottom: 8, paddingVertical: 16, paddingHorizontal: 24}} 
				onScroll = { e => {
					let paddingToBottom = 10;
					paddingToBottom += e.nativeEvent.layoutMeasurement.height;
					if(e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
						setDisable(false)
					}
				} }>
					<StyledText style = {styles.termsText} children = { terms.text } />
			</ScrollView>
			
			<Button disabled = {btnDisabled} title = "He leído y acepto los T&C" onPress = { onPress } />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eee"
	},
	termsText: {
		textAlign: "justify",
		fontFamily: "roboto",
		fontSize: 16
	},
	title: {
		textAlign: "center",
		fontFamily: "roboto",
		color: "white",
		fontSize:24,

		backgroundColor: Colors.blue900,

		padding: 16,
		paddingTop: 32,
		
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	}
});

export default TermScreen;