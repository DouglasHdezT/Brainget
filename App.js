/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, {Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { AsyncStorage, AppState, View } from 'react-native';
import PouchDB from './database/config/builder';

import store from './store/Store';
import { setLanguage } from './store/actions/ConfigActions';
import { syncBudget } from './store/actions/BudgetActions';
import * as budgetService from './database/services/BudgetService';

import Translation from './translation/TranslationHelper';
import * as Localization from 'expo-localization';

import { PERIODS_KEY, DB_NAME, TERMS_KEY, FALSE_VALUE, TRUE_VALUE, LANG_KEY, ES_VALUE } from './assets/constants/KeyValues';
import { periodsSettings, errorWarning } from './components/alerts/Alerts';

import MainNavigationStack from './components/navigations/MainNavigationStack';
import TermScreen from './screens/TermScreen';
import LoadingModal from './components/alerts/LoadingModal';
import LoadingExecModal from './components/alerts/LoadingExecModal';


export default class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			dataLoaded: false,
			configLoaded: false,
			loading: false,
			termsAndConditions: FALSE_VALUE,
			lang: ES_VALUE,
		}

		this.db = new PouchDB(DB_NAME, {adapter: 'react-native-sqlite'});
	}

	setDataLoaded = (value) => {
		this.setState({
			dataLoaded: value,
		});
	}

	setConfigLoaded = (value) => {
		this.setState({
			configLoaded: value,
		});
	}

	setTermsAccepted = async () => {
		this.setState({
			termsAndConditions: TRUE_VALUE,
		})

		AsyncStorage.setItem(TERMS_KEY, TRUE_VALUE);
	}

	loadConfig = async () => {
		try{
			console.log("----- Configuración general -----");

			//Cargado de fuentes
			await Font.loadAsync({
					'roboto': require('./assets/fonts/Roboto-Light.ttf'),
					'roboto-light': require('./assets/fonts/Roboto-Thin.ttf'),
					'roboto-bold': require('./assets/fonts/Roboto-Regular.ttf'),
					'roboto-italic': require('./assets/fonts/Roboto-LightItalic.ttf'),
				});
							
			console.log("Fuentes Cargadas");

			//Cargando lenguaje
			let lang = await AsyncStorage.getItem(LANG_KEY);
			if (lang === null){
				lang = ES_VALUE;
			}
			store.dispatch(setLanguage(lang))
			Translation.setLanguage(lang);
			//console.log(Translation.getStringValue("test"));
			
			
			//Terminos y condiciones?
			
			let termsAndConditions = await AsyncStorage.getItem(TERMS_KEY);
			if(termsAndConditions === null){
				await AsyncStorage.setItem(TERMS_KEY, FALSE_VALUE);
				termsAndConditions = FALSE_VALUE;
			}
			
			this.setState({
				termsAndConditions: termsAndConditions,
			});
		} catch(err) {
			console.log(err)
		}
	}

	loadData = async () => {
		try{
			console.log("----- Configuración Datos -----");

			//Configuración básica
			let periodsConfig = await AsyncStorage.getItem(PERIODS_KEY);
	
			if (periodsConfig === null){
				periodsConfig = await periodsSettings()
				await AsyncStorage.setItem(PERIODS_KEY, periodsConfig);
			}

			console.log(`Configuraciones cargadas ${periodsConfig}`);

			//Database checking
			budgetService.openConnection();
			
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
		}catch(err){
			console.log(err);
			errorWarning();
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
			const newLang = store.getState().config.lang;
			
			if(newLoading !== this.state.loading){
				//console.log("Llegue");
				
				this.setState({
					loading: newLoading,
				})
			}

			if(newLang !== this.state.lang){
				Translation.setLanguage(newLang);

				this.setState({
					lang: newLang
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
		let content = <View></View>;

		const mainContent = <MainNavigationStack />;

		const terms = <TermScreen onPress = {this.setTermsAccepted}/>;

		const splashScreen = (
			<AppLoading
				startAsync={this.loadConfig}
				onFinish={() => this.setConfigLoaded(true)} />
		);

		const splashScreenData = (
			<LoadingExecModal
				startAsync={this.loadData}
				onFinish={() => this.setDataLoaded(true)} />
		);

		if(!this.state.dataLoaded){
			if(this.state.termsAndConditions === FALSE_VALUE){
				if(!this.state.configLoaded){
					content = splashScreen;
				}else{
					content = terms;
				}
			}else{
				content = splashScreenData;
			}
		}else{
			content = mainContent;
		}

		return (
			<Provider store = {store}>
				{ content }
				{this.state.loading && <LoadingModal visible = { this.state.loading } />}
			</Provider>	
		);
	}
}