import React, { Component } from 'react';

import { StyleSheet, View, ImageBackground, Alert, Share } from 'react-native';

import BackgroundImages from '../assets/constants/BackgroundImages';
import Colors from '../assets/constants/Colors';
import Icons from '../assets/constants/Icons';

import { Types } from './../assets/constants/AboutData';

import Translation, { Keys } from '../translation/TranslationHelper';
import terms from '../translation/strings/termsAndConditions';

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
						<View style = { { marginEnd: 16 } }>
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