import React, {Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native'

import store from './store/Store'

import { PERIODS_KEY } from './assets/constants/KeyValues';
import { periodsSettings } from './components/alerts/Alerts';

import MainNavigationStack from './components/navigations/MainNavigationStack'


export default class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			dataLoaded: false,
		}
	}

	setDataLoaded = (value) => {
		this.setState({
			dataLoaded: value,
		});
	}
	
	render(){
		if (!this.state.dataLoaded) {
			return (<AppLoading
				startAsync={loadData}
				onFinish={() => this.setDataLoaded(true)} />);
		}

		return (
			<Provider store = {store}>
				<MainNavigationStack />
			</Provider>	
		);
	}
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