import React from 'react';

import {View, StyleSheet} from 'react-native';
import MainMenu from '../components/menus/MainMenu';

import mainMenuConf from '../assets/constants/MainMenuData'

const MainMenuScreen = props => {
	const navigate = route => {
		props.navigation.navigate(route);
	}

	return(
		<View style={styles.container}>
			<MainMenu menus = {mainMenuConf} navigate = {navigate}/>
		</View>
	);
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