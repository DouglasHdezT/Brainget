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
		About: AboutScreen
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