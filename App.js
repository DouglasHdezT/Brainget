import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native'

import store from './store/Store'

import { PERIODS_KEY } from './assets/constants/KeyValues';
import { periodsSettings } from './components/alerts/Alerts';

import MainNavigationStack from './components/navigations/MainNavigationStack'


export default function App() {
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (<AppLoading
			startAsync={loadData}
			onFinish={() => setDataLoaded(true)} />);
	}

	return (
		<Provider store = {store}>
			<MainNavigationStack />
		</Provider>	
 	);
}

const loadData = async () => {
	try{
		//Cargado de fuentes
		await Font.loadAsync({
				'roboto': require('./assets/fonts/Roboto-Light.ttf'),
				'roboto-light': require('./assets/fonts/Roboto-Thin.ttf'),
				'roboto-bold': require('./assets/fonts/Roboto-Regular.ttf'),
			});
						
		console.log("Fuentes Cargadas");
		
		//Configuración básica
		let periodsConfig = await AsyncStorage.getItem(PERIODS_KEY);

		if (periodsConfig == null){
			periodsConfig = await periodsSettings()
			await AsyncStorage.setItem(PERIODS_KEY, periodsConfig)
		}
		
		console.log(`Configuraciones cargadas ${periodsConfig}`);

	} catch(err) {
		console.log(err)
	}
}