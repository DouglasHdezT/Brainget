/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { Component } from 'react';

import { StyleSheet, View, ImageBackground } from 'react-native';
import { Linking } from 'expo';

import Colors from '../assets/constants/Colors';
import BackgroundImages from '../assets/constants/BackgroundImages';
import Icons from '../assets/constants/Icons';

import Translation from '../translation/TranslationHelper';

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