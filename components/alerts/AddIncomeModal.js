/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { Component } from 'react';

import { Modal, View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions, Alert } from 'react-native';

import Icons from '../../assets/constants/Icons';
import Colors from '../../assets/constants/Colors';
import Dimens from '../../assets/constants/Dimens';

import BorderedButton from '../buttons/BorderedButton';
import IncomeForm from '../forms/IncomeForm';
import TopEndIconButton from '../buttons/TopEndIconButton';
import { dropConfimation, emptyFieldsAlert, misstypeFields } from './Alerts';

import Translation, { Keys } from './../../translation/TranslationHelper';

class AddIncomeModal extends Component {

	constructor(props){
		super(props);

		this.initState = {
			incomeName: '',
			incomeValue: '',
			incomeValueOld: '',
			incomeKey: undefined,
			isAdding: false,
			_id:''
		}

		this.state = {
			...this.initState,
		}
	}

	changeHandler = (id, value) => {
		let newState = {};
		
		if (id === "isAdding") { 
			let newIncomeValue = '';

			if (value === false) {
				newIncomeValue = this.state.incomeValueOld;
			}

			newState = {
				...newState,
				incomeValue: newIncomeValue,
			}
		}

		newState = {
			...newState,
			[id]: value,
		}

		this.setState(newState);
	}

	addIncomeVerified = (isUpdating = false) => {
		if (!this.state.incomeName || !this.state.incomeValue) {
			emptyFieldsAlert();
		} else if (isNaN(this.state.incomeValue)){
			misstypeFields();
		}else if(isUpdating){
			this.props.updateIncome(
				this.state._id,
				this.state.incomeName,
				this.state.incomeValue,
				this.state.isAdding,
				this.state.incomeKey
			);
			this.setState({...this.initState});
			this.props.closeModal();
		} else{
			this.props.addIncome(this.state.incomeName, this.state.incomeValue, this.state.incomeKey);
			this.setState({...this.initState});
			this.props.closeModal();
		}
	}

	verifyFields = () => {
		this.props.isNewIncome ? this.setState({...this.initState}) : this.setState ({
			incomeName: this.props.oldIncome.title,
			incomeKey: this.props.oldIncome.titleKey,
			incomeValueOld: this.props.oldIncome.money.toFixed(2),
			incomeValue: '',
			isAdding: true,
			_id: this.props.oldIncome._id,
		})
	}

	render() {
		const addButton = (
			<BorderedButton
				color={Colors.btnNeutral}
				text={ Translation.getStringValue(Keys.add_action_text) } 
				onPress = {() => {
					this.addIncomeVerified();
				}}
			/>);
		
		const updateDeleteButtons = (
			<>
				<BorderedButton
					color={Colors.btnDelete}
					text={ Translation.getStringValue(Keys.delete_action_text) } 
					onPress = {() => {
						dropConfimation(() => {
							this.props.removeIncome(this.state._id);
							this.props.closeModal(); 
						});
					}}
					/>
				<BorderedButton
					color={Colors.btnOk}
					text= { Translation.getStringValue(Keys.update_action_text) }
					onPress = {() => {
						this.addIncomeVerified(true);
					}}
					/>
			</>
		);

		return (
			<Modal
				animationType="fade"
				transparent={true}
				visible={this.props.visible}
				onShow = {this.verifyFields}
				onRequestClose={this.props.closeModal}>

				<TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}}>
					<View style={styles.modalBackground} >
						<View style={styles.modalView}>
							<Text style={styles.title}>{ Translation.getStringValue(Keys.income_modal_title_text) }</Text>
	
							<View style={{ flex: 3 }}>
								<IncomeForm
									isNew={this.props.isNewIncome}
									isAdding={this.state.isAdding}
									incomeName={this.state.incomeName}
									incomeValue={this.state.incomeValue}
									incomeKey={this.state.incomeKey}
									options = {this.props.options}
									changeHandler={this.changeHandler}
								/>
							</View>
	
							<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems:'center' }}>
								{this.props.isNewIncome ? addButton : updateDeleteButtons}
							</View>

							<TopEndIconButton
								src={Icons.close}
								onPress={this.props.closeModal}
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>

			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	modalBackground: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.shadowBg,
	},
	modalView: {
		width: '90%',
		minHeight: Math.round(Dimensions.get('window').height) / 2,

		padding: 24,

		backgroundColor: '#fff',

		borderTopStartRadius: 15,
		borderBottomEndRadius: 15,

		justifyContent: 'center',
	},
	title: {
		fontFamily: 'roboto-bold',
		fontSize: Dimens.h,
		color: Colors.ModalTitleColor,

		textAlign: 'center',
		textAlignVertical: 'center',

		flex: 1
	},
});

export default AddIncomeModal;