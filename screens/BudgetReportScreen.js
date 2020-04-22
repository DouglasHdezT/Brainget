import React, { Component } from 'react';

import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import { getBudgetById } from '../database/services/BudgetService'
import { intToMonth } from '../utils/DateUtils'

import BackgroundImages from '../assets/constants/BackgroundImages';
import Colors from '../assets/constants/Colors';
import FootThreeTexts from '../components/footers/FootThreeTexts';
import ReportList from '../components/Lists/ReportList';

import Translation, { Keys } from '../translation/TranslationHelper';

class BudgetReportScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: Translation.getStringValue(Keys.report_screen_title),
		};
	};

	constructor(props){
		super(props);
		this.budgetId = this.props.navigation.getParam('budgetId', "BudgetReportScreen")

		this.state = {
			budget: {}
		}
	}

	fetchBudget = async () => {
		const budget = await getBudgetById(this.budgetId);

		this.setState({
			budget: budget
		})
	}

	componentDidMount(){
		this.fetchBudget()
	}

	render(){
		const { startDay=0, endDay=0, month=0, year=0, totalIncome=0, totalCosts=0, currentBalance=0 } = this.state.budget;

		return(
			<View style = {{flex:1}}>
				<ImageBackground
					style = {styles.imageContainer} 
					source = {BackgroundImages.reportScreen}>

					<View style={styles.mainContainer}>
						<View style={styles.titleContainer}>
							<Text style = {styles.title}>{ Translation.getStringValue(Keys.report_result_title) }</Text>
							<Text style = {styles.subtitle}> {`${startDay} - ${endDay} / ${intToMonth(month)} / ${year}`} </Text>
						</View>
						<View style = {styles.listContainer}>
							<ReportList budget = {this.state.budget} />
						</View>
						<FootThreeTexts
							style = { {marginBottom: 4} }
							text1 = { Translation.getStringValue(Keys.incomes_result_text) }
							text2 = { Translation.getStringValue(Keys.costs_result_text) }
							text3 = { Translation.getStringValue(Keys.balance_result_text) }
						/>
						<FootThreeTexts
							text1 = { `$ ${totalIncome.toFixed(2)}` }
							text2 = { `$ ${totalCosts.toFixed(2)}` }
							text3 = { `$ ${currentBalance.toFixed(2)}` }
						/>
					</View>

				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imageContainer:{
		flex:1, resizeMode:"center"
	},
	mainContainer:{
		flex: 1,
		padding: 16,
		backgroundColor: Colors.shadowBg
	},
	titleContainer:{
		flex:1,
		padding: 4,
		justifyContent:"center",
	},
	title:{
		fontFamily: "roboto-bold",
		fontSize: 24,
		color:"#fff",

		textAlign:"center",
		textAlignVertical:"center",
	},
	subtitle:{
		fontFamily: "roboto",
		fontSize: 20,
		color:"#fff",

		textAlign:"center",
		textAlignVertical:"center",
	},
	listContainer:{
		flex: 6,
	}
});

export default BudgetReportScreen;