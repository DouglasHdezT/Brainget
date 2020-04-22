import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import MainMenu from '../components/menus/MainMenu';

import mainMenuConf from '../assets/constants/MainMenuData'
import Translation, {Keys} from '../translation/TranslationHelper';

class MainMenuScreen extends Component {
	static navigationOptions = {
		title: Translation.getStringValue(Keys.app_title_text)
	}

	constructor(props){
		super(props);
	}

	navigate = redirect => {
		const {route, params} = redirect;
		this.props.navigation.navigate(route, {...params, title: params.title()});
	}

	render(){
		return(
			<View style={styles.container}>
				<MainMenu menus = {mainMenuConf} navigate = {this.navigate}/>
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
  });

export default MainMenuScreen;