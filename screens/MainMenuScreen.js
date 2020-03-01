import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import MainMenu from '../components/menus/MainMenu';

import mainMenuConf from '../assets/constants/MainMenuData'

class MainMenuScreen extends Component {
	constructor(props){
		super(props);
	}

	navigate = route => {
		this.props.navigation.navigate(route);
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