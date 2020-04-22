import React, { Component } from 'react';

import { StyleSheet, View, ImageBackground } from 'react-native';

import { connect } from 'react-redux'; 

import { addCost, removeCost, updateCost } from "../database/services/BudgetService";
import { intToMonth } from '../utils/DateUtils';

import ExpensesList from '../components/Lists/ExpensesList';
import FootLeftRight from '../components/footers/FootLeftRight';
import MoneyContainer from '../components/footers/containers/MoneyContainer';
import PeriodContainer from '../components/footers/containers/PeriodContainer';

import Colors from '../assets/constants/Colors';
import BackgroundImages from '../assets/constants/BackgroundImages';
import AddCostModal from '../components/alerts/AddCostModal';

import Translation, { Keys } from '../translation/TranslationHelper';

class CostsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'Cost Screen'),
		};
	};
	
	constructor(props){
		super(props);

		this.state = {
			addModal : false,
			editableCost: {},
			isNewCost: true,
		}
	}

	openAddModal = (isNewCost, id = undefined) => {
		this.setState({
			...this.state,
			addModal: true,
			isNewCost: isNewCost,
			editableCost: id ? this.props.expenses.find(cost => cost._id === id) : {},
		});
	}

	render(){
		const TAG = this.props.navigation.getParam('TAG');
		const itemsFiltered = this.props.expenses.filter(cost => cost.TAG === TAG);

		const leftFootContent = <MoneyContainer money = {this.props.currentBalance.toFixed(2)}/>;
		const rightFootContent = <PeriodContainer period = { `${this.props.startDay} - ${this.props.endDay} ${intToMonth(this.props.month)}` }/>;

		return(
			<View style = {{flex:1}}>
				<AddCostModal
					closeModal = {()=>this.setState({addModal: !this.state.addModal})}
					addCost = { (title, value, isPercent, TAG) => addCost(this.props.budgetId, title, value, isPercent, TAG) }
					removeCost = { (id) => removeCost(this.props.budgetId, id) }
					updateCost = { (id, title, value, isPercent) => updateCost(this.props.budgetId, id, title, value, isPercent) }
					isNewCost = {this.state.isNewCost}
					oldCost = {this.state.editableCost}
					visible = {this.state.addModal}
					TAG = {TAG}
					/>

				<ImageBackground
					source = {BackgroundImages.costsScreen}
					style = {styles.imageContainer}>
					<View style = {styles.container}>
						<ExpensesList
							items = {itemsFiltered}
							openAddModal = {this.openAddModal}
							/>
					</View>

					<FootLeftRight
						leftPanelColor = {Colors.blue900}
						rightPanelColor = {Colors.lightBlue500}
						leftContent = {leftFootContent}
						rightContent = {rightFootContent}
						/>
				</ImageBackground>
			
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imageContainer:{
		flex:1,
		resizeMode:'center',
	},
	container: {
		flex:1,
		padding:16,
		backgroundColor: Colors.shadowBg,
	}
});

const mapStateToProps = state => ({
	budgetId: state.budget._id,
	expenses : state.budget.expenses,
	currentBalance: state.budget.currentBalance,
	startDay: state.budget.startDay,
	endDay: state.budget.endDay,
	month: state.budget.month,
});


export default connect(mapStateToProps, null)(CostsScreen);