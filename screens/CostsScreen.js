/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
		const options = this.props.navigation.getParam("options", []).map(key => Translation.getStringValue(key));

		const leftFootContent = <MoneyContainer money = {this.props.currentBalance.toFixed(2)}/>;
		const rightFootContent = <PeriodContainer period = { `${this.props.startDay} - ${this.props.endDay} ${intToMonth(this.props.month)}` }/>;

		return(
			<View style = {{flex:1}}>
				<AddCostModal
					closeModal = {()=>this.setState({addModal: !this.state.addModal})}
					addCost = { (title, value, isPercent, TAG, taxable) => addCost(this.props.budgetId, title, value, isPercent, TAG, taxable) }
					removeCost = { (id) => removeCost(this.props.budgetId, id) }
					updateCost = { (id, title, value, isPercent, taxable) => updateCost(this.props.budgetId, id, title, value, isPercent, taxable) }
					isNewCost = {this.state.isNewCost}
					oldCost = {this.state.editableCost}
					options = { options }
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