/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { Component } from 'react';

import ServicesData from '../assets/constants/ServicesData';
import BackgroundImages from '../assets/constants/BackgroundImages';
import Icons from '../assets/constants/Icons';
import Colors from '../assets/constants/Colors';

import { StyleSheet, View, ImageBackground, Share, Alert } from 'react-native';
import { Linking } from 'expo';

import FootLeftRight from '../components/footers/FootLeftRight';
import ServicesHeader from '../components/headers/ServicesHeader';

import Translation, { Keys } from '../translation/TranslationHelper';

import ServicesList from '../components/Lists/ServicesList';
import TextIconButtonContainer from '../components/footers/containers/TextIconButtonContainer';

class ServicesScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'Services Screen'),
		};
	};

	constructor(props){
		super(props);
	}

	makeCall = () => {
		const phoneURI = `tel:${Translation.getStringValue(ServicesData.phone)}`;
		Linking.canOpenURL(phoneURI)
		.then(supported => {
			if(supported){
				Linking.openURL(phoneURI)
			}
		})
	}

	shareContent = async () => {
		try {
			const services = ServicesData.services.reduce((result, item, i) => result + `${i+1}. ${Translation.getStringValue(item.title)}\n`, "");
			const message = `
${Translation.getStringValue(ServicesData.name)}
----
${Translation.getStringValue(ServicesData.degree)}
${Translation.getStringValue(Keys.contact_services_action)}: ${Translation.getStringValue(ServicesData.phone)}
----
${Translation.getStringValue(Keys.services_title_text)}

${services}
			`;

			await Share.share({ message: message })
		}catch (err){
			Alert.alert(Translation.getStringValue(Keys.error_alert_title));
		}		
	}

	render(){
		const mappedItems = ServicesData.services.map(item => { 
			return {
				title: Translation.getStringValue(item.title),
				text: Translation.getStringValue(item.text),
			}
		 })

		const leftFootButton = (
			<TextIconButtonContainer
				left
				onPress = { this.shareContent }
				icon = { Icons.share }
				text = { Translation.getStringValue(Keys.share_services_action) }
			/>
		);

		const rightFootButton = (
			<TextIconButtonContainer
				onPress = { this.makeCall }
				icon = { Icons.phone }
				text = { Translation.getStringValue(Keys.contact_services_action) }
			/>
		);

		return(
			<View style = {{flex: 1}}>
				<ImageBackground
					style = { styles.backgroundContainer }
					source = { BackgroundImages.servicesScreen }>
					<View style = { styles.mainContainer }>
						<ServicesHeader 
							flex = { 1.6 }
							image = { Icons.mainPhoto }
							title = { Translation.getStringValue(ServicesData.name) }
							subtitle = { Translation.getStringValue(ServicesData.degree) }
							text = { Translation.getStringValue(ServicesData.phone) }
						/>

						<ServicesList
							flex = { 1 }
							items = { mappedItems }
							biography = { { title: Translation.getStringValue(ServicesData.biography.title), text: Translation.getStringValue(ServicesData.biography.text) } }
						/>
					</View>

					<FootLeftRight
						leftContent = { leftFootButton }
						rightContent = { rightFootButton }
						leftPanelColor = { Colors.indigo500 }
						rightPanelColor = { Colors.green700 }
					/>
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

		alignItems:"center",
		justifyContent: "center",

		padding: 12,
		backgroundColor: Colors.denseShadowBg,
	}
});

export default ServicesScreen;