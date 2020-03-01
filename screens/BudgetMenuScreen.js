import React from 'react';

import {View, StyleSheet} from 'react-native';
import MainMenu from '../components/menus/MainMenu';

import budgetMenuConf from '../assets/constants/BudgetMenuData'
import Colors from '../assets/constants/Colors'

import FootLeftRight from '../components/footers/FootLeftRight';
import MoneyContainer from '../components/footers/containers/MoneyContainer';
import PeriodContainer from '../components/footers/containers/PeriodContainer';


const BudgetMenuScreen = props => {
	const navigate = route => {
		props.navigation.navigate(route);
	}

	const leftFootContent = <MoneyContainer money = "100.03"/>;
	const rightFootContent = <PeriodContainer period = "1 -31 enero"/>;

	return(
		<View style={styles.container}>
			<MainMenu menus = {budgetMenuConf} navigate = {navigate}/>
			<FootLeftRight
				leftPanelColor = {Colors.blue900}
				rightPanelColor = {Colors.lightBlue500}
				leftContent = {leftFootContent}
				rightContent = {rightFootContent}
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