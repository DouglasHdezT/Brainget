/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { Component } from 'react';

import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';

import { connect } from 'react-redux';

import BackgroundImages from '../assets/constants/BackgroundImages';
import Colors from '../assets/constants/Colors';

import {getYearsAndBudgetsOfLast, getBudgetsPerYear} from '../database/services/BudgetService';

import FootCenterItem from '../components/footers/FootCenterItem';
import OptionsModalButton, { UP } from '../components/buttons/OptionsModalButton';
import YearBalanceGraph from '../components/graphics/YearBalanceGraph';

import Translation, {Keys} from '../translation/TranslationHelper';

class StatsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: Translation.getStringValue(Keys.stats_title_text),
		};
	};

	constructor(props){
		super(props);

		this.state = {
			currentYear: 0,
			years: [],
			currentResults: [],
			height: Dimensions.get("window").height,
		}
	}

	setHeight = (event) => {
		const { height } = event.nativeEvent.layout;
		this.setState({height: height-16});
	}

	changeYear = (year) => {
		if(year === this.state.currentYear){
			return;
		}

		getBudgetsPerYear(year, true).then(result => {
			this.setState({
				currentResults: result,
				currentYear: year,
				currentValue: 0,
			});
		});
	}

	fetchYears = () => {
		getYearsAndBudgetsOfLast(true).then(result => {
			let newYears = [...result.years];
			const actualYear = new Date().getFullYear();

			if(newYears.findIndex(year => year === actualYear) === -1){
				newYears = [actualYear, ...years];
			}	

			const yearlyResume = result.budgetsOfLastYear;

			this.setState({
				years: newYears,
				currentYear: newYears[0],
				currentResults: yearlyResume,
				currentValue: 0,
			})
		});
	}

	valueChangeHandler = value => {
		this.setState({
			currentValue: value
		})
	}

	componentDidMount(){
		this.fetchYears();
	}

	render(){
		const yearPanel = (
			<OptionsModalButton
				value = { this.state.currentYear }
				items = { this.state.years }
				onChange = { this.changeYear }
				direction = { UP }
				/>);

		return(
			<View style = {{ flex:1 }}>
				<ImageBackground
					style = { styles.backgroundContainer }
					source = { BackgroundImages.statsScreen }>

					<View style = { styles.mainContainer } onLayout = {this.setHeight}>
						<YearBalanceGraph 
							items = { this.state.currentResults } 
							height = {this.state.height} 
							isLoading = {this.props.isLoading}/>
					</View>

					<FootCenterItem 
						content = { yearPanel }
						color = {Colors.blue500 }/>

				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	backgroundContainer: {
		flex:1,
		resizeMode:"center"
	},
	mainContainer:{
		flex:1,

		alignItems:"center",
		justifyContent: "center",

		padding: 16,
		backgroundColor: Colors.denseShadowBg,
	}
});

const mapStateToProps = (state) =>({
	isLoading: state.config.isLoading
});

export default connect(mapStateToProps, null)(StatsScreen);