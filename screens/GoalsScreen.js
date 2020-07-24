/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, {Component} from 'react';

import { View, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addIncome, removeIncome, updateIncome, updateBudgetQuestions } from '../database/services/BudgetService'

import BGImages from '../assets/constants/BackgroundImages'
import Colors from '../assets/constants/Colors'

import IncomeList from '../components/Lists/IncomeList';
import FootLeftRight from '../components/footers/FootLeftRight';
import MoneyContainer from '../components/footers/containers/MoneyContainer';
import NavContainer from '../components/footers/containers/NavContainer';
import TextButtonContainer from '../components/footers/containers/TextButtonContainer';
import GoalsForm from '../components/forms/GoalsForm';
import AddIncomeModal from '../components/alerts/AddIncomeModal';

import Translation, { Keys } from '../translation/TranslationHelper';
import { emptyFieldsAlert, misstypeFields } from '../components/alerts/Alerts';

class GoalsScreen extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'Goals Screen'),
		};
	};

	constructor(props){
		super(props);

		this.state = {
			isFirstScreen: true,
			question1:this.props.question1.toFixed(2) || 0,
			question2:this.props.question2.toFixed(2) || 0,
			question3:this.props.question3 || "",
			addModal: false,
			isNewIncome: true,
			editableIncome: {},
		}
	}

	changeHandler = (id, value) => {
		this.setState({
			[id]: value
		})
	}

	submitForm = async () => {

		if( !this.state.question1 || !this.state.question2 || !this.state.question3){
			emptyFieldsAlert();
		}else if (isNaN(this.state.question1) || isNaN(this.state.question2)){
			misstypeFields()
		}else {
			const q1 = parseFloat(this.state.question1);
			const q2 = parseFloat(this.state.question2);
			const q3 = this.state.question3;
			
			await updateBudgetQuestions(this.props.budgetId, 
				q1, q2, q3);
			
			this.props.navigation.navigate("BudgetMenu")
			
			this.setState({
				question1: q1.toFixed(2),
				question2: q2.toFixed(2),
				question3: q3,
			})
		}
	}

	insideNavigate = () => {
		this.setState({
			isFirstScreen : !this.state.isFirstScreen
		})
	}

	toggleAddModal = () =>{
		this.setState({
			addModal: !this.state.addModal,
		})
	}

	openAddModal = (isNewIncome, id = undefined) =>{
		this.setState({
			addModal: !this.state.addModal,
			isNewIncome: isNewIncome,
			editableIncome: id ? this.props.incomes.find(income => income._id == id) : {},
		})
	}
	
	render(){
		const optionsRaw = this.props.navigation.getParam("options", []);
		const options = optionsRaw.map(key => ({text: Translation.getStringValue(key), key: key}))
		
		const leftFootContent = (
			this.state.isFirstScreen ? 
				<MoneyContainer money = {this.props.totalIncome.toFixed(2)}/> : 
				<NavContainer left onPress = {this.insideNavigate}/>
		);
		
		const rightFootContent = (
			this.state.isFirstScreen ? 
				<NavContainer right onPress = {this.insideNavigate}/> : 
				<TextButtonContainer onPress = { this.submitForm } text = { Translation.getStringValue(Keys.submit_action_text) }/>
		);

		const mainContent = (
			this.state.isFirstScreen ? 
				<IncomeList items = {this.props.incomes} openAddModal = {this.openAddModal}/> :
				<GoalsForm
					changeHandler = {this.changeHandler}
					question1 = {this.state.question1}
					question2 = {this.state.question2}
					question3 = {this.state.question3}
				/>
		);

		return(
			<View style = {{flex: 1}}>
				<AddIncomeModal
					visible = {this.state.addModal}
					addIncome = { (title, money, titleKey) => { addIncome(this.props.budgetId, title, money, titleKey) } }
					removeIncome = { (id) => { removeIncome(this.props.budgetId, id) } }
					updateIncome = { (id, title, money, isAdding,titleKey) => updateIncome(this.props.budgetId, id, title, money, isAdding, titleKey) }
					closeModal = {this.toggleAddModal}
					isNewIncome = {this.state.isNewIncome}
					oldIncome = {this.state.editableIncome}
					options = { options }
				/>
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
	budgetId: state.budget._id,
	incomes: state.budget.incomes,
	totalIncome: state.budget.totalIncome,
	question1: state.budget.question1,
	question2: state.budget.question2,
	question3: state.budget.question3,
});

export default connect(mapStateToProps, null)(GoalsScreen);