import React from 'react';

import {View, StyleSheet} from 'react-native';
import MainMenu from '../components/menus/MainMenu';
import MoneyPeriodFootPanel from '../components/infos/MoneyPeriodFootPanel'

import budgetMenuConf from '../assets/constants/BudgetMenuData'
import Colors from '../assets/constants/Colors'


const BudgetMenuScreen = props => {
	const navigate = route => {
		props.navigation.navigate(route);
	}

	return(
		<View style={styles.container}>
			<MainMenu menus = {budgetMenuConf} navigate = {navigate} flex = {9}/>
			<MoneyPeriodFootPanel
				leftPanelColor = {Colors.blue900}
				rightPanelColor = {Colors.lightBlue500}
				money = {100.05}
				period = '1 - 31 enero'
				/>
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