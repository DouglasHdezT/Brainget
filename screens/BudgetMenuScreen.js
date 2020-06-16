/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import {View, StyleSheet} from 'react-native';
import { connect } from 'react-redux'

import { intToMonth } from '../utils/DateUtils';

import budgetMenuConf from '../assets/constants/BudgetMenuData'
import Colors from '../assets/constants/Colors'

import Translation from '../translation/TranslationHelper';

import MainMenu from '../components/menus/MainMenu';
import FootLeftRight from '../components/footers/FootLeftRight';
import MoneyContainer from '../components/footers/containers/MoneyContainer';
import PeriodContainer from '../components/footers/containers/PeriodContainer';


const BudgetMenuScreen = props => {
	const navigate = redirect => {
		const {route, params} = redirect;
		props.navigation.navigate(route, {...params, title: Translation.getStringValue(params.title)});
	}

	const leftFootContent = <MoneyContainer money = {props.currentBalance.toFixed(2)}/>;
	const rightFootContent = <PeriodContainer period = { `${props.startDay} - ${props.endDay} ${intToMonth(props.month)}` }/>;

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
	currentBalance: state.budget.currentBalance,
	startDay: state.budget.startDay,
	endDay: state.budget.endDay,
	month: state.budget.month,
});

export default connect(mapStateToProps, null)(BudgetMenuScreen);