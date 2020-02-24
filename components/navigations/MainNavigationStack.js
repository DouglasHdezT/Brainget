import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainMenuScreen from '../../screens/MainMenuScreen'
import BudgetMenuScreen from '../../screens/BudgetMenuScreen'

const NavigationStack = createStackNavigator({
	MainMenu: MainMenuScreen,
	BudgetMenu: BudgetMenuScreen
});

export default createAppContainer(NavigationStack);