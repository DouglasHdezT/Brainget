import React, {Component} from 'react';

import { View, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addIncome, removeIncome, updateIncome } from '../database/services/BudgetService'

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
			question1:'',
			question2:'',
			question3:'',
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
		
		const leftFootContent = (
			this.state.isFirstScreen ? 
				<MoneyContainer money = {this.props.totalIncome.toFixed(2)}/> : 
				<NavContainer left onPress = {this.insideNavigate}/>
		);
		
		const rightFootContent = (
			this.state.isFirstScreen ? 
				<NavContainer right onPress = {this.insideNavigate}/> : 
				<TextButtonContainer text = { Translation.getStringValue(Keys.submit_action_text) }/>
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
					addIncome = { (title, money) => { addIncome(this.props.budgetId, title, money) } }
					removeIncome = { (id) => { removeIncome(this.props.budgetId, id) } }
					updateIncome = { (id, title, money) => updateIncome(this.props.budgetId, id, title, money) }
					closeModal = {this.toggleAddModal}
					isNewIncome = {this.state.isNewIncome}
					oldIncome = {this.state.editableIncome}
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
});

export default connect(mapStateToProps, null)(GoalsScreen);