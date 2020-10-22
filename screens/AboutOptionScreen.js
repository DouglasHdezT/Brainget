/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { Component } from 'react';

import { StyleSheet, View, ImageBackground, Alert, Share } from 'react-native';
import { Linking } from 'expo';

import BackgroundImages from '../assets/constants/BackgroundImages';
import Colors from '../assets/constants/Colors';
import Icons from '../assets/constants/Icons';

import { Types } from './../assets/constants/AboutData';

import Translation, { Keys } from '../translation/TranslationHelper';
import terms from '../translation/strings/termsAndConditions';
import AboutData from '../assets/constants/AboutData';

import ResourcesContent from '../components/aboutContents/ResourcesContent';
import LibrariesContent from '../components/aboutContents/LibrariesContent';
import DeveloperContent from '../components/aboutContents/DeveloperContent';
import LicenceContent from '../components/aboutContents/LicenceContent';

import IconButton from '../components/buttons/IconButton';

class AboutOptionScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'About Screen'),
			headerRight: () =>  { 
				let content = undefined;

				if(navigation.getParam("type") === Types.DEVELOPER ) {
					content = (
						<View style = { { marginEnd: 16, flexDirection: "row" } }>
							<IconButton
								style = {{marginEnd: 16}}
								iconSize = { 24 }
								image = { Icons.github }
								onPress = { () => { Linking.openURL(Translation.getStringValue(AboutData.sourceCode)) } }
							/>
							<IconButton
								iconSize = { 24 }
								image = { Icons.share }
								onPress = { async () => {
									const props = navigation.getParam("props");
									try{
										const message = `${Translation.getStringValue(props.name)}\n` 
											+ `${Translation.getStringValue(props.specs)}\n\n`
											+ "----------------------\n"
											+ `${Translation.getStringValue(Keys.developer_email_text)}: ${Translation.getStringValue(props.email)}\n`
											+ "----------------------\n\n"
											+ `${props.logo}`;

										await Share.share({ message: message });

									}catch(err){
										Alert.alert(Translation.getStringValue(Keys.error_alert_title));
									}
								} }
							/>
						</View>
					);
				}

				return content;
			}
		};
	};

	constructor(props){
		super(props);
	}

	render(){
		const type = this.props.navigation.getParam("type", Types.LICENSE);
		const props = this.props.navigation.getParam("props");

		let mainContent = undefined;

		switch(type){
			case Types.LICENSE:
				mainContent = (
					<LicenceContent 
						title = { Translation.getStringValue(props.title) }
						license = { terms.text }
					/>
				);
				break;
			case Types.RESOURCES:
				mainContent = (
					<ResourcesContent
						images = { props.images }
						icons = { props.icons }
					/>
				);
				break;
			case Types.LIBRARIES:
				mainContent = (
					<LibrariesContent
						main = { props.main }
						aux = { props.aux }
					/>
				);
				break;
			case Types.DEVELOPER:
				mainContent = (
					<DeveloperContent
						logo = { props.logo }
						name = { Translation.getStringValue(props.name) }
						email = { Translation.getStringValue(props.email) }
						specs = { Translation.getStringValue(props.specs) }
						repository = { Translation.getStringValue(props.repository) }
					/>
				);
				break;
		}

		return(
			<View style = {{flex: 1}}>
				<ImageBackground 
					source = { BackgroundImages.aboutScreen }
					style = { styles.backgroundContainer } >
					<View style = { styles.mainContainer }>
						{ mainContent }
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	backgroundContainer: {
		flex:1,
		resizeMode:"center"
	},
	mainContainer:{
		flex:1,

		justifyContent: "center",

		padding: 12,
		backgroundColor: Colors.denseShadowBg,
	}
});

export default AboutOptionScreen;