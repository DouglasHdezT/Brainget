/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { Component } from 'react';

import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Text } from 'react-native';

import Colors from '../assets/constants/Colors';
import BackgroundImages from '../assets/constants/BackgroundImages';
import Icons from '../assets/constants/Icons';
import Dimens from '../assets/constants/Dimens';

import { connect } from 'react-redux';
import { setLanguage } from '../store/actions/ConfigActions';
import { ES_VALUE, EN_VALUE } from '../assets/constants/KeyValues';

import AboutData from '../assets/constants/AboutData';

import Translation, { Keys } from '../translation/TranslationHelper';


import AboutHeader from '../components/headers/AboutHeader';
import Menu from '../components/menus/MainMenu';

class AboutScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'About Screen')
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
							flex = { 1.5 }
							logo = { AboutData.mainLogo }
							appName = { Translation.getStringValue(AboutData.appName) }
							version = { Translation.getStringValue(AboutData.appVersion) }
							sourceCode = { Translation.getStringValue(AboutData.sourceCode) }
							license={Translation.getStringValue(AboutData.licenseShortText)}
							ppURL = { Translation.getStringValue(AboutData.ppURL) }/>

						<Menu menus = { AboutData.optionsMenu } navigate = { this.navigate }/>

						<TouchableOpacity style = {styles.languageContainer}
							onPress = {() => {
								if(this.props.lang === ES_VALUE){
									this.props.setLanguage(EN_VALUE);
								} else {
									this.props.setLanguage(ES_VALUE);
								}
								this.props.navigation.setParams({title: Translation.getStringValue(Keys.about_title_text)})
							}}>
							
							<Image style = {styles.languageIcon} 
								source = {this.props.lang === ES_VALUE ? Icons.spain : Icons.usa} />
							
							<Text style = {styles.languageText}> 
								{ Translation.getStringValue(Keys.current_language) } 
							</Text>
						</TouchableOpacity>
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
	},
	languageContainer: {
		flex: 0.2,
		backgroundColor: Colors.blue700,
		padding: 8,

		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	languageIcon: {
		width: Dimens.h +8 ,
		height: Dimens.h +8,
		resizeMode: "contain",
		marginEnd: 16
	},
	languageText: {
		fontFamily: "roboto",
		color: "white",
		fontSize: Dimens.p,
	}
});

const mapStateToProps = state => ({
	lang: state.config.lang
});

const mapDispatchToProps = {
	setLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);