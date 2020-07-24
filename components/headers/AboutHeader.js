/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View, Image, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Linking } from 'expo';
import Colors from '../../assets/constants/Colors';
import Dimens from '../../assets/constants/Dimens';

import DividerHorizontal from '../design/DividerHorizontal';

import Translation, { Keys } from '../../translation/TranslationHelper';

const AboutHeader = props => {
	const flex =  props.flex ? props.flex : 1;

	return (
		<ScrollView
			contentContainerStyle = { {justifyContent: "flex-start", alignItems: "center", flexGrow: 1} } 
			style = { {...styles.mainContainer, flex: flex} }>
			<Image source = { props.logo } style = { styles.mainLogo }/>

			<Text style = { styles.title } > { props.appName } </Text>
			<Text style = { styles.footerText }> { props.license } </Text>
			<DividerHorizontal/>
			<View style = { styles.infoContainer }>
				<Text style = { styles.titleInfoText }> { `${Translation.getStringValue(Keys.app_version_text)}:` } </Text>
				<Text style = { styles.infoText }> { props.version } </Text>
			</View>
			<View style = { styles.infoContainer }>
				<Text style = { styles.titleInfoText }> { `${Translation.getStringValue(Keys.privacy_policy_title)}:` } </Text>
				<TouchableOpacity
					style={{flex:1}}
					onPress={() => { Linking.openURL(props.ppURL) } }>
					<Text style = { styles.infoText }> { props.ppURL } </Text>
				</TouchableOpacity>
			</View>
			
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mainContainer:{
		marginBottom: 8,
	},
	mainLogo: {
		width: Dimensions.get("window").width / 4,
		height: Dimensions.get("window").width / 4,
		resizeMode: "center",
	},
	title: {
		textAlign: "center",
		
		fontSize: Dimens.h,
		fontFamily: "roboto-bold",
		color: Colors.fontColorLight,
		marginBottom:8,
	},
	infoContainer: {
		width: "80%",

		flexDirection: "row",
		justifyContent: "center",
		marginVertical: 8
	},
	titleInfoText: {
		flex: 1,
		marginEnd: 4,
		fontSize: Dimens.p,
		fontFamily: "roboto-bold",
		color: Colors.fontColorLight,
		textAlign: "right"
	},
	infoText: {
		flex: 1,
		fontSize: Dimens.p - 2,
		fontFamily: "roboto",
		color: Colors.fontColorLight,
		textAlignVertical: "center"
	},
	footerText: {
		textAlign: "center",
		fontSize: Dimens.p,
		fontFamily: "roboto",
		color: Colors.fontColorLight,
		marginBottom: 8,
	}
});

export default AboutHeader;