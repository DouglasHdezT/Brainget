import React from 'react';

import {View, StyleSheet} from 'react-native';
import MainMenu from '../components/menus/MainMenu';

import budgetMenuConf from '../assets/constants/BudgetMenuData'

const BudgetMenuScreen = props => {
	const navigate = route => {
		props.navigation.navigate(route);
	}

	return(
		<View style={styles.container}>
			<MainMenu menus = {budgetMenuConf} navigate = {navigate}/>
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

export default BudgetMenuScreen;