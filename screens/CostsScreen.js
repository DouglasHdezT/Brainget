import React, { Component } from 'react';

import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import { connect } from 'react-redux'; 

import ExpensesList from '../components/Lists/ExpensesList';
import FootLeftRight from '../components/footers/FootLeftRight';
import MoneyContainer from '../components/footers/containers/MoneyContainer';
import PeriodContainer from '../components/footers/containers/PeriodContainer';

import Colors from '../assets/constants/Colors';
import BackgroundImages from '../assets/constants/BackgroundImages';
import { addCost, removeCost, updateCost } from "../store/actions/BudgetActions";
import AddCostModal from '../components/alerts/AddCostModal';

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
		const rightFootContent = <PeriodContainer period = "1 -31 enero"/>;

		return(
			<View style = {{flex:1}}>
				<AddCostModal
					closeModal = {()=>this.setState({addModal: !this.state.addModal})}
					addCost = {this.props.addCost}
					removeCost = {this.props.removeCost}
					updateCost = {this.props.updateCost}
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
	expenses : state.budget.expenses,
	currentBalance: state.budget.currentBalance
});

const mapDispatchToProps = {
	addCost,
	removeCost,
	updateCost
}

export default connect(mapStateToProps, mapDispatchToProps)(CostsScreen);