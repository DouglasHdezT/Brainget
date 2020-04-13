import React, {Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import PouchDB from './database/config/builder';

import store from './store/Store';
import * as budgetService from './database/services/BudgetService'

import { PERIODS_KEY, DB_NAME } from './assets/constants/KeyValues';
import { periodsSettings } from './components/alerts/Alerts';

import MainNavigationStack from './components/navigations/MainNavigationStack'


export default class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			dataLoaded: false,
		}

		this.db = new PouchDB(DB_NAME, {adapter: 'react-native-sqlite'});
	}

	setDataLoaded = (value) => {
		this.setState({
			dataLoaded: value,
		});
	}

	loadData = async () => {
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

			//Database checking
			budgetService.showInfo();
			console.log(await budgetService.configIndex());

			//Budget actual
			const budgetActual = await (await budgetService.getActual()).docs
			console.log(await budgetService.getActual());
			
			if(budgetActual.length === 0){
				console.log("Creando Budget");
				await budgetService.createBudget(periodsConfig);
			}

			const budget = await (await budgetService.getActual()).docs
			console.log(budget[0])

		} catch(err) {
			console.log(err)
		}
	}

	componentWillUnmount(){
		this.db.close().then(()=>{
			console.log("Database closed!");
		})
	}
	
	render(){
		if (!this.state.dataLoaded) {
			return (<AppLoading
				startAsync={this.loadData}
				onFinish={() => this.setDataLoaded(true)} />);
		}

		return (
			<Provider store = {store}>
				<MainNavigationStack />
			</Provider>	
		);
	}
}