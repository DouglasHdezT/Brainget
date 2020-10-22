/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { Component } from 'react';

import { StyleSheet, View, ImageBackground } from 'react-native';

import FootLeftRight from '../components/footers/FootLeftRight';
import MoneyContainer from '../components/footers/containers/MoneyContainer';
import ResultsList from '../components/Lists/ResultsList';
import OptionsModalButton, {UP} from '../components/buttons/OptionsModalButton'

import { getBudgetsPerYear, getYearsAndBudgetsOfLast } from '../database/services/BudgetService'

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
		getYearsAndBudgetsOfLast().then(result => {
			let newYears = [...result.years];
			const actualYear = new Date().getFullYear();

			if(newYears.findIndex(year => year === actualYear) === -1){
				newYears = [actualYear, ...years];
			}	

			const yearlyResume = result.budgetsOfLastYear;
			let yearlyBalance = 0;

			if (yearlyResume !== undefined && yearlyResume.length !== 0){
				yearlyBalance = yearlyResume.reduce((total, month) => { return total + month.monthlyBalance; }, 0);
			}

			this.setState({
				years: newYears,
				currentYear: newYears[0],
				currentResults: yearlyResume,
				money: yearlyBalance
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