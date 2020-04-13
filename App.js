import React, {Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import PouchDB from './database/config/builder';

import store from './store/Store';
import { syncBudget } from './store/actions/BudgetActions'
import * as budgetService from './database/services/BudgetService'

import { PERIODS_KEY, DB_NAME } from './assets/constants/KeyValues';
import { periodsSettings } from './components/alerts/Alerts';

import MainNavigationStack from './components/navigations/MainNavigationStack'
import LoadingModal from './components/alerts/LoadingModal'


export default class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			dataLoaded: false,
			loading: false,
		}

		this.db = new PouchDB(DB_NAME, {adapter: 'react-native-sqlite'});
		
		/* this.changeListener = this.db.changes({
			live: true,
			since: "now"
		}).on("change", async (info) => {
			console.log("Capturando cambio")
			let budgetActual = await (await budgetService.getActual()).docs
			
			if(budgetActual.length !== 0){
				console.log(budgetActual[0]._rev);
				store.dispatch(syncBudget(budgetActual[0]));
			}
		}); */
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
			budgetService.openConnection();
			budgetService.showInfo();
			await budgetService.configIndex();

			//Budget actual
			let budgetActual = await (await budgetService.getActual()).docs
			
			if(budgetActual.length === 0){
				console.log("Creando Budget");
				await budgetService.createBudget(periodsConfig);
				budgetActual = await (await budgetService.getActual()).docs
			}

			store.dispatch(syncBudget(budgetActual[0]));

		} catch(err) {
			console.log(err)
		}
	}

	componentDidMount(){
		this.subscription = store.subscribe(() => {
			const newLoading = store.getState().config.isLoading;
			
			if(newLoading !== this.state.loading){
				console.log("Llegue");
				
				this.setState({
					loading: newLoading,
				})
			}
		})
	}

	componentWillUnmount(){
		/* this.changeListener.cancel();
		this.db.close().then(()=>{
			console.log("Database closed!");
		}) */
		this.subscription();
		budgetService.closeConnection();
	}
	
	render(){
		if (!this.state.dataLoaded) {
			return (<AppLoading
				startAsync={this.loadData}
				onFinish={() => this.setDataLoaded(true)} />);
		}

		return (
			<Provider store = {store}>
				<LoadingModal visible = { this.state.loading } />
				<MainNavigationStack />
			</Provider>	
		);
	}
}