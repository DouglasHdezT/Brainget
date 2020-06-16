/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainMenuScreen from '../../screens/MainMenuScreen'
import BudgetMenuScreen from '../../screens/BudgetMenuScreen'
import GoalsScreen from '../../screens/GoalsScreen'
import CostsScreen from '../../screens/CostsScreen';
import ResultsScreen from '../../screens/ResultsScreen';
import StatsScreen from '../../screens/StatsScreen';
import ServicesScreen from '../../screens/ServicesScreen';
import AboutScreen from '../../screens/AboutScreen';
import AboutOptionScreen from '../../screens/AboutOptionScreen';
import BudgetReportScreen from '../../screens/BudgetReportScreen';

import Colors from '../../assets/constants/Colors';


const NavigationStack = createStackNavigator(
	{
		MainMenu: MainMenuScreen,
		BudgetMenu: BudgetMenuScreen,
		Goals: GoalsScreen, 
		Costs: CostsScreen,
		Results: ResultsScreen,
		Stats: StatsScreen,
		Services: ServicesScreen,
		About: AboutScreen,
		AboutOption: AboutOptionScreen,
		Report: BudgetReportScreen
	}, 
	{
		initialRouteName: 'MainMenu',
		/* The header config from HomeScreen is now here */
		/* defaultNavigationOptions: {
		  headerStyle: {
			backgroundColor: Platform.OS === 'android' ? Colors.indigo900 : '#fff',
		  },
		  headerTintColor: Platform.OS === 'android' ?'#fff':Colors.indigo900,
		  headerTitleStyle: {
			  fontFamily:'roboto'
		  },
		}, */
		defaultNavigationOptions: {
			headerStyle: {
			  backgroundColor: Colors.indigo900,
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontFamily:'roboto'
			},
		  },
	  });

export default createAppContainer(NavigationStack);