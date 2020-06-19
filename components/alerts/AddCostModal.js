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

import BorderedButton from '../buttons/BorderedButton';
import CostForm from '../forms/CostForm';
import TopEndIconButton from '../buttons/TopEndIconButton';
import { dropConfimation, emptyFieldsAlert, misstypeFields } from './Alerts';

import Translation, {Keys} from '../../translation/TranslationHelper';

class AddCostModal extends Component {

	constructor(props){
		super(props);

		this.initState = {
			costName: '',
			costValue: '00.00',
			costValueOld: '',
			isPercent: false,
			isTaxable: false,
			costKey: undefined,
			isAdding: true,
			_id:''
		}

		this.state = {
			...this.initState,
		}
	}

	changeHandler = (id, value) => {
		let newState = {}
		if(id === "isAdding" && value === false){
			newState = {
				[id]: value,	
				costValue: this.state.costValueOld,
			}
		}else{
			newState = {
				[id]: value
			}
		}
		
		this.setState(newState)
	}

	addCost = (isUpdating = false) => {
		if (!this.state.costName || !this.state.costValue) {
			emptyFieldsAlert();
		} else if (isNaN(this.state.costValue)){
			misstypeFields();
		}else if(isUpdating){
			this.props.updateCost(
				this.state._id, 
				this.state.costName, 
				this.state.costValue, 
				this.state.isPercent, 
				this.state.isTaxable,
				this.state.isAdding, 
				this.state.costKey
			);
			
			this.setState({...this.initState});
			this.props.closeModal();
		} else{
			this.props.addCost(
				this.state.costName, 
				this.state.costValue, 
				this.state.isPercent, 
				this.props.TAG, 
				this.state.isTaxable, 
				this.state.costKey
			);
			
			this.setState({...this.initState});
			this.props.closeModal();
		}
	}

	verifyFields = () => {
		this.props.isNewCost ? this.setState({...this.initState}) : this.setState ({
			...this.state,
			costName: this.props.oldCost.title,
			costValueOld: this.props.oldCost.money.toFixed(2),
			costValue: '00.00',
			costKey: this.props.oldCost.titleKey,
			isTaxable: this.props.oldCost.taxable ? true : false,
			_id: this.props.oldCost._id,
			isAdding: true,
			isPercent: false,
		})
	}

	render() {
		
		const addButton = (
			<BorderedButton
				color={Colors.btnNeutral}
				text={ Translation.getStringValue(Keys.add_action_text) }
				onPress = {() => {
					this.addCost();
				}}
			/>);
		
		const updateDeleteButtons = (
			<>
				<BorderedButton
					color={Colors.btnDelete}
					text= {Translation.getStringValue(Keys.delete_action_text) }
					onPress = {()=>{
						dropConfimation(() => {
							this.props.removeCost(this.state._id);
							this.props.closeModal(); 
						});
					}}
					/>
				<BorderedButton
					color={Colors.btnOk}
					text={ Translation.getStringValue(Keys.update_action_text) }
					onPress = {() => {
						this.addCost(true);
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
							<Text style={styles.title}> { Translation.getStringValue(Keys.cost_modal_title_text) } </Text>
	
							<View style={{ flex: 3, marginVertical: 8 }}>
								<CostForm
									isNew = {this.props.isNewCost}
									isAdding = {this.state.isAdding}
									costName={this.state.costName}
									costValue={this.state.costValue}
									costKey = {this.state.costKey}
									isPercent = {this.state.isPercent}
									isTaxable = { this.state.isTaxable }
									options = { this.props.options }
									changeHandler={this.changeHandler}
								/>
							</View>
	
							<View style={{ flex: 2, flexDirection: 'row', justifyContent: "center", alignItems:'center' }}>
								{this.props.isNewCost ? addButton : updateDeleteButtons}
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
		minHeight: Math.round(Dimensions.get('window').height)* 3 / 5,

		padding: 24,

		backgroundColor: '#fff',

		borderTopStartRadius: 15,
		borderBottomEndRadius: 15,

		justifyContent: 'center',
	},
	title: {
		fontFamily: 'roboto-bold',
		fontSize: 24,
		color: Colors.ModalTitleColor,

		textAlign: 'center',
		textAlignVertical: 'center',

		flex: 1
	},
});

export default AddCostModal;