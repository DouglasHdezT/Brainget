import React, { Component } from 'react';

import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import FootLeftRight from '../components/footers/FootLeftRight';
import MoneyContainer from '../components/footers/containers/MoneyContainer';
import ResultsList from '../components/Lists/ResultsList';
import OptionsModalButton, {UP} from '../components/buttons/OptionsModalButton'

import { getBudgetsPerYear, getYears } from '../database/services/BudgetService'

import BackgroundImages from '../assets/constants/BackgroundImages';
import Colors from '../assets/constants/Colors';

class ResultsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'Results Screen'),
		};
	};

	constructor(props){
		super(props);

		this.state = {
			money: 0,
			currentYear: 0,
			currentResults: [],
			years:[]
		}
	}

	fetchResults = (year) => {
		if (year === this.state.currentYear){
			return;
		}

		getBudgetsPerYear(year).then(results => {
			if(results !== undefined && results.length !== 0){
				const yearlyBalance = results.reduce((total, month) => { return total + month.monthlyBalance; }, 0);

				this.setState({
					currentYear: year,
					currentResults: results,
					money: yearlyBalance,
				})
			}
		});
	}

	fetchYears = () => {
		getYears().then(years => {
			let newYears = years
			const actualYear = new Date().getFullYear();

			if(years.findIndex(year => year === actualYear) === -1){
				newYears = [actualYear, ...years];
			}	

			this.fetchResults(newYears[0])

			this.setState({
				years: years
			})
		});
	}
	
	changeYear = (year) => {
		this.fetchResults(year)
	}

	onPressBudgetHandler = (id) => {
		this.props.navigation.navigate('Report', { budgetId : id })
	}

	componentDidMount(){
		this.fetchYears();	
	}

	render(){
		const moneyColor = this.state.money < 0 ? Colors.red800 : Colors.green800;
		const moneyPanel = (<MoneyContainer money = { this.state.money.toFixed(2) } />);
		const yearPanel = (<OptionsModalButton 
								items = { this.state.years }
								onChange = {this.changeYear} 
								value = { this.state.currentYear } 
								direction = { UP } />);

		return(
			<View style = {{flex: 1}}>
				<ImageBackground
					source= { BackgroundImages.resultsScreen }
					style= { styles.imageContainer }>

					<View 
						style = {styles.mainContainer}>

						<ResultsList 
							budgetsPerYear = { this.state.currentResults } 
							total = { this.state.currentResults.length }
							onPress = {(id) => { this.onPressBudgetHandler(id) }}
						/>

					</View>

					<FootLeftRight
						leftPanelColor = { moneyColor }
						leftContent = { moneyPanel }

						rightPanelColor = { Colors.blue500 }
						rightContent = { yearPanel }
					/>

				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imageContainer:{
		flex:1,
		resizeMode:"center",
	},
	mainContainer:{
		flex:1,

		alignItems:"center",
		justifyContent: "center",

		paddingHorizontal: 16,

		backgroundColor: Colors.shadowBg,
	}
});

export default ResultsScreen;