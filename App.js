import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MainNavigationStack from './components/navigations/MainNavigationStack'


export default function App() {
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (<AppLoading
			startAsync={fetchFonts}
			onFinish={() => setDataLoaded(true)} />);
	}

	return (
		<MainNavigationStack />	
 	);
}



const fetchFonts = () => {
	return Font.loadAsync({
		'roboto': require('./assets/fonts/Roboto-Light.ttf'),
		'roboto-light': require('./assets/fonts/Roboto-Thin.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Regular.ttf'),
	})
}