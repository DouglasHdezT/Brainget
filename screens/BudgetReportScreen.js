/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { Component } from 'react';

import { StyleSheet, View, Text, ImageBackground, Alert } from 'react-native';
import * as Print from 'expo-print';
import { Linking } from 'expo';

import { getBudgetById } from '../database/services/BudgetService'
import { intToMonth } from '../utils/DateUtils'
import HTMLReportBuilder from '../utils/HTMLReportBuilder';

import BackgroundImages from '../assets/constants/BackgroundImages';
import Colors from '../assets/constants/Colors';
import Icons from '../assets/constants/Icons';
import Dimens from '../assets/constants/Dimens';

import FootThreeTexts from '../components/footers/FootThreeTexts';
import ReportList from '../components/Lists/ReportList';
import IconButton from '../components/buttons/IconButton';

import Translation, { Keys } from '../translation/TranslationHelper';

class BudgetReportScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: Translation.getStringValue(Keys.report_screen_title),
			headerRight: () => {
				return <View style = { { marginEnd: 16 } }>
					<IconButton
						iconSize = { 24 }
						image = { Icons.download }
						onPress = { navigation.getParam("printReport", ()=>{}) }
					/>
				</View>
			}
		};
	};

	constructor(props){
		super(props);
		this.budgetId = this.props.navigation.getParam('budgetId', "BudgetReportScreen");

		this.state = {
			budget: {}
		}
	}

	printReport = async () => {
		const { startDay=0, endDay=0, month=0, year=0, totalIncome=0, totalCosts=0, currentBalance=0, incomes = [], expenses = [] } = this.state.budget;
		const date = `${startDay} - ${endDay} / ${intToMonth(month)} / ${year}`;
		const expensesFiltered = expenses.filter(item => item.money !== 0);
		const incomesFiltered = incomes.filter(item => item.money !== 0);

		const html = new HTMLReportBuilder();
		html.setReportDate(date);
		html.setItems(incomesFiltered, 
			expensesFiltered,
			totalIncome, 
			totalCosts, 
			currentBalance);
		
		try {
			await Print.printAsync({ html: html.build() });
		}
		catch(err){
			console.log(err);
			Alert.alert(Translation.getStringValue(Keys.error_alert_title));
		}
	}

	fetchBudget = async () => {
		const budget = await getBudgetById(this.budgetId);

		this.setState({
			budget: budget
		})
	}

	componentDidMount(){
		this.props.navigation.setParams({"printReport": this.printReport});
		this.fetchBudget()
	}

	render(){
		const { startDay=0, endDay=0, month=0, year=0, totalIncome=0, totalCosts=0, currentBalance=0} = this.state.budget;

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
		fontSize: Dimens.h,
		color:"#fff",

		textAlign:"center",
		textAlignVertical:"center",
	},
	subtitle:{
		fontFamily: "roboto",
		fontSize: Dimens.h - 4,
		color:"#fff",

		textAlign:"center",
		textAlignVertical:"center",
	},
	listContainer:{
		flex: 6,
	}
});

export default BudgetReportScreen;