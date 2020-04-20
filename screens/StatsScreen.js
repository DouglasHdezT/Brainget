import React, { Component } from 'react';

import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';

import { connect } from 'react-redux';

import BackgroundImages from '../assets/constants/BackgroundImages';
import Colors from '../assets/constants/Colors';

import {getYearsAndBudgetsOfLast, getBudgetsPerYear} from '../database/services/BudgetService';

import FootCenterItem from '../components/footers/FootCenterItem';
import OptionsModalButton, { UP } from '../components/buttons/OptionsModalButton';
import YearBalanceGraph from '../components/graphics/YearBalanceGraph';

class StatsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Estadísticas",
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