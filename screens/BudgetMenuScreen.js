import React from 'react';

import {View, StyleSheet} from 'react-native';
import { connect } from 'react-redux'

import budgetMenuConf from '../assets/constants/BudgetMenuData'
import Colors from '../assets/constants/Colors'

import MainMenu from '../components/menus/MainMenu';
import FootLeftRight from '../components/footers/FootLeftRight';
import MoneyContainer from '../components/footers/containers/MoneyContainer';
import PeriodContainer from '../components/footers/containers/PeriodContainer';


const BudgetMenuScreen = props => {
	const navigate = redirect => {
		const {route, params} = redirect;
		props.navigation.navigate(route, params);
	}

	const leftFootContent = <MoneyContainer money = {props.currentBalance.toFixed(2)}/>;
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

BudgetMenuScreen.navigationOptions = navigationData => {
	return {
		headerTitle: navigationData.navigation.getParam('title', 'Budget Menu')
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

const mapStateToProps = state => ({
	currentBalance: state.budget.currentBalance
});

export default connect(mapStateToProps, null)(BudgetMenuScreen);