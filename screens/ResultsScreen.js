import React, { Component } from 'react';

import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import FootLeftRight from '../components/footers/FootLeftRight';
import MoneyContainer from '../components/footers/containers/MoneyContainer';
import ResultsList from '../components/Lists/ResultsList';

import { getBudgetsPerYear } from '../database/services/BudgetService'

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
			currentYear: new Date().getFullYear(),
			currentResults: []
		}
	}

	fetchResults = () => {
		getBudgetsPerYear(this.state.currentYear).then(results => {
			if(results !== undefined && results.length !== 0){
				const yearlyBalance = results.reduce((total, month) => { return total + month.monthlyBalance; }, 0);
				console.log(yearlyBalance);
				
				this.setState({
					currentResults: results,
					money: yearlyBalance,
				})
			}
		});
	}	

	componentDidMount(){
		this.fetchResults();	
	}

	render(){
		const moneyColor = this.state.money < 0 ? Colors.red800 : Colors.green800;
		const moneyPanel = (<MoneyContainer money = { this.state.money.toFixed(2) } />);

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
						/>

					</View>

					<FootLeftRight
						leftPanelColor = { moneyColor }
						leftContent = { moneyPanel }

						rightPanelColor = { Colors.blue500 }
						rightContent
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