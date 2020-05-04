import React, {Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { AsyncStorage, AppState } from 'react-native';
import PouchDB from './database/config/builder';

import store from './store/Store';
import { syncBudget } from './store/actions/BudgetActions';
import * as budgetService from './database/services/BudgetService';

import Translation from './translation/TranslationHelper';
import * as Localization from 'expo-localization';

import { PERIODS_KEY, DB_NAME } from './assets/constants/KeyValues';
import { periodsSettings } from './components/alerts/Alerts';

import MainNavigationStack from './components/navigations/MainNavigationStack';
import LoadingModal from './components/alerts/LoadingModal';


export default class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			dataLoaded: false,
			loading: false,
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
					'roboto-italic': require('./assets/fonts/Roboto-LightItalic.ttf'),
				});
							
			console.log("Fuentes Cargadas");

			//Cargando lenguaje
			Translation.setLanguage((await Localization.getLocalizationAsync()).locale);
			//console.log(Translation.getStringValue("test"));
			
			//Configuración básica
			let periodsConfig = await AsyncStorage.getItem(PERIODS_KEY);
	
			if (periodsConfig == null){
				periodsConfig = await periodsSettings()
				await AsyncStorage.setItem(PERIODS_KEY, periodsConfig)
			}
			
			console.log(`Configuraciones cargadas ${periodsConfig}`);

			//Database checking
			budgetService.openConnection();
			//budgetService.showInfo();
			//budgetService.showAll()
			//budgetService.getYears();
			//budgetService.getPreviousBudgetWithSameConfiguration();
			//console.log( await (await budgetService.getYearsAndBudgetsOfLast()).budgetsOfLastYear )
			await budgetService.configIndex();

			//Budget actual
			let budgetActual = await (await budgetService.getActual()).docs
			
			if(budgetActual.length === 0){
				console.log("Creando Budget");
				await budgetService.createBudget(periodsConfig);
				budgetActual = await (await budgetService.getActual()).docs
			}

			store.dispatch(syncBudget(budgetActual[0]));
			console.log("Budget cargado");

		} catch(err) {
			console.log(err)
		}
	}

	verifyBudgetListener = async (nextState) => {
		if(nextState === "active"){
			if(this.state.dataLoaded){
				console.log("Comprobando...");

				Translation.setLanguage(await Localization.getLocalizationAsync().locale);
				
				let budgetActual = await (await budgetService.getActual()).docs
				let periodsConfig = await AsyncStorage.getItem(PERIODS_KEY);
			
				if(budgetActual.length === 0){
					console.log("Arregando");
					
					console.log("Creando Budget");
					await budgetService.createBudget(periodsConfig);
					budgetActual = await (await budgetService.getActual()).docs
					store.dispatch(syncBudget(budgetActual[0]));
				}else if (budgetActual[0]._id !== store.getState().budget._id) {
					store.dispatch(syncBudget(budgetActual[0]));
				}

				console.log("Todo nice!");
			}
		}		
	}

	componentDidMount(){
		this.subscription = store.subscribe(() => {
			const newLoading = store.getState().config.isLoading;
			
			if(newLoading !== this.state.loading){
				//console.log("Llegue");
				
				this.setState({
					loading: newLoading,
				})
			}
		});

		AppState.addEventListener("change", this.verifyBudgetListener)
	}

	componentWillUnmount(){
		this.subscription();
		AppState.removeEventListener("change", this.verifyBudgetListener)
		budgetService.closeConnection();
	}
	
	render(){
		const mainContent = <MainNavigationStack />
		const splashScreen = (
			<AppLoading
						startAsync={this.loadData}
						onFinish={() => this.setDataLoaded(true)} />
		);

		return (
			<Provider store = {store}>
				<LoadingModal visible = { this.state.loading } />
				{ this.state.dataLoaded ? mainContent : splashScreen }
			</Provider>	
		);
	}
}