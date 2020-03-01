import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainMenuScreen from '../../screens/MainMenuScreen'
import BudgetMenuScreen from '../../screens/BudgetMenuScreen'
import GoalsScreen from '../../screens/GoalsScreen'
import Colors from '../../assets/constants/Colors';
import { Platform } from 'react-native';





const NavigationStack = createStackNavigator({
	MainMenu: MainMenuScreen,
	BudgetMenu: BudgetMenuScreen,
	Goals: GoalsScreen, 
	}, 
	{
		initialRouteName: 'MainMenu',
		/* The header config from HomeScreen is now here */
		defaultNavigationOptions: {
		  headerStyle: {
			backgroundColor: Platform.OS === 'android' ? Colors.indigo900 : '#fff',
		  },
		  headerTintColor: Platform.OS === 'android' ?'#fff':Colors.indigo900,
		  headerTitleStyle: {
			  fontFamily:'roboto-bold'
		  },
		},
	  });

export default createAppContainer(NavigationStack);