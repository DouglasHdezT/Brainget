import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import store from './store/Store'

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
		let periodsConfig = await AsyncStorage.getItem(keys.periodsConfigKey);

		if (periodsConfig == null){
			periodsConfig = await periodsSettings()
			AsyncStorage.setItem(keys.periodsConfigKey, periodsConfig)
		}
		
		console.log("Configuraciones cargadas");

		resolve();

	} catch(err) {
		reject(err);
	}
}