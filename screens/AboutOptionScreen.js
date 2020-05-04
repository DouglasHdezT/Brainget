import React, { Component } from 'react';

import { StyleSheet, View, ImageBackground } from 'react-native';

import BackgroundImages from '../assets/constants/BackgroundImages';
import Colors from '../assets/constants/Colors';

import { Types } from './../assets/constants/AboutData';
import LicenceContent from '../components/aboutContents/LicenceContent';

import Translation from '../translation/TranslationHelper';
import ResourcesContent from '../components/aboutContents/ResourcesContent';

class AboutOptionScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'About Screen'),
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
						license = { Translation.getStringValue(props.text) }
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
				break;
			case Types.DEVELOPER:
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