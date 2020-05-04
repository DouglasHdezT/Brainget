import React, { Component } from 'react';

import { StyleSheet, View, ImageBackground } from 'react-native';
import { Linking } from 'expo';

import Colors from '../assets/constants/Colors';
import BackgroundImages from '../assets/constants/BackgroundImages';
import Icons from '../assets/constants/Icons';

import Translation, { Keys } from '../translation/TranslationHelper';

import AboutData from '../assets/constants/AboutData';

import AboutHeader from '../components/headers/AboutHeader';
import Menu from '../components/menus/MainMenu';
import IconButton from '../components/buttons/IconButton';

class AboutScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'About Screen'),
			headerRight: () => (
				<View style = { { marginEnd: 16 } }>
					<IconButton
						iconSize = { 24 }
						image = { Icons.github }
						onPress = { () => { Linking.openURL(Translation.getStringValue(AboutData.sourceCode)) } }
					/>
				</View>
			)
		};
	};

	constructor(props){
		super(props);
	}

	navigate = redirect => {
		const {route, params} = redirect;
		this.props.navigation.navigate(route, {...params, title: Translation.getStringValue(params.title)});
	}

	render(){
		return(
			<View style = {{flex: 1}}>
				<ImageBackground 
					source = { BackgroundImages.aboutScreen }
					style = { styles.backgroundContainer } >
					<View style = { styles.mainContainer }>

						<AboutHeader
							flex = { 1 }
							logo = { AboutData.mainLogo }
							appName = { Translation.getStringValue(AboutData.appName) }
							version = { Translation.getStringValue(AboutData.appVersion) }
							sourceCode = { Translation.getStringValue(AboutData.sourceCode) }
							license = { Translation.getStringValue(AboutData.licenseShortText) }/>

						<Menu menus = { AboutData.optionsMenu } navigate = { this.navigate }/>
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

		padding: 16,
		backgroundColor: Colors.shadowBg,
	}
});

export default AboutScreen;