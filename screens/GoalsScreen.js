import React, {Component} from 'react';

import { View, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addIncome } from '../store/actions/BudgetActions'

import BGImages from '../assets/constants/BackgroundImages'
import Colors from '../assets/constants/Colors'

import IncomeList from '../components/Lists/IncomeList';
import FootLeftRight from '../components/footers/FootLeftRight';
import MoneyContainer from '../components/footers/containers/MoneyContainer';
import NavContainer from '../components/footers/containers/NavContainer';
import TextButtonContainer from '../components/footers/containers/TextButtonContainer';
import GoalsForm from '../components/forms/GoalsForm';

class GoalsScreen extends Component {
	constructor(props){
		super(props);

		this.state = {
			isFirstScreen: true,
			question1:'',
			question2:'',
			question3:'',
		}
	}

	changeHandler = (id, value) => {
		this.setState({
			[id]: value
		})
	}

	insideNavigate = () => {
		this.setState({
			isFirstScreen : !this.state.isFirstScreen
		})
	}
	
	render(){
		const leftFootContent = (
			this.state.isFirstScreen ? 
				<MoneyContainer money = {this.props.totalIncome}/> : 
				<NavContainer left onPress = {this.insideNavigate}/>
		);
		
		const rightFootContent = (
			this.state.isFirstScreen ? 
				<NavContainer right onPress = {this.insideNavigate}/> : 
				<TextButtonContainer text = 'Finalizar'/>
		);

		const mainContent = (
			this.state.isFirstScreen ? 
				<IncomeList items = {this.state.incomeItems}/> :
				<GoalsForm
					changeHandler = {this.changeHandler}
					question1 = {this.state.question1}
					question2 = {this.state.question2}
					question3 = {this.state.question3}
				/>
		);

		return(
			<View style = {{flex: 1}}>
				<ImageBackground
					source = {BGImages.goalsScreen}
					style = {styles.imageContainer}>
	
					<View style = {styles.container}>
						{mainContent}
					</View>

					<FootLeftRight
						leftPanelColor = {this.state.isFirstScreen ? Colors.cyan500 : Colors.blue500}
						rightPanelColor = {this.state.isFirstScreen ? Colors.blue500 : Colors.cyan500}
						leftContent = {leftFootContent}
						rightContent = {rightFootContent}
						/>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		resizeMode: 'center',
	},
	container:{
		flex:1,
		padding: 16,
		backgroundColor: Colors.shadowBg,
	},

});

const mapStateToProps = state => ({
	incomes: state.budget.incomes,
	totalIncome: state.budget.totalIncome,
});

const mapDispatchToProps = {
	addIncome
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsScreen);