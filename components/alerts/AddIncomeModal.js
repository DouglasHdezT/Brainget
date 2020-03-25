import React, { Component } from 'react';

import { Modal, View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions, Alert } from 'react-native';

import Icons from '../../assets/constants/Icons';
import Colors from '../../assets/constants/Colors';

import BorderedButton from '../buttons/BorderedButton';
import IncomeForm from '../forms/IncomeForm';
import TopEndIconButton from '../buttons/TopEndIconButton';
import { dropConfimation } from './Alerts';

class AddIncomeModal extends Component {

	constructor(props){
		super(props);

		this.initState = {
			incomeName: '',
			incomeValue: '',
			_id:''
		}

		this.state = {
			...this.initState,
		}
	}

	changeHandler = (id, value) => {
		this.setState({
			[id]: value
		})
	}

	addIncomeVerified = (isUpdating = false) => {
		if (!this.state.incomeName || !this.state.incomeValue) {
			Alert.alert(
				'No dejes vacio los campos',
				'Ambos campos deben de poseer un valor',
				[{ text: 'OK', }]
			);
		} else if (typeof parseFloat(this.state.incomeValue) != 'number'){
			Alert.alert(
				'El campo debe ser un numero',
				'',
				[{ text: 'OK', }]
			);
		}else if(isUpdating){
			this.props.updateIncome(this.state._id, this.state.incomeName, this.state.incomeValue);
			this.setState({...this.initState});
			this.props.closeModal();
		} else{
			this.props.addIncome(this.state.incomeName, this.state.incomeValue);
			this.setState({...this.initState});
			this.props.closeModal();
		}
	}

	verifyFields = () => {
		this.props.isNewIncome ? this.setState({...this.initState}) : this.setState ({
			incomeName: this.props.oldIncome.title,
			incomeValue: this.props.oldIncome.money.toFixed(2),
			_id: this.props.oldIncome._id,
		})
	}

	render() {
		const addButton = (
			<BorderedButton
				color={Colors.btnNeutral}
				text="Añadir"
				onPress = {() => {
					this.addIncomeVerified();
				}}
			/>);
		
		const updateDeleteButtons = (
			<>
				<BorderedButton
					color={Colors.btnDelete}
					text="Eliminar"
					onPress = {() => {
						dropConfimation(() => {
							this.props.removeIncome(this.state._id);
							this.props.closeModal(); 
						});
					}}
					/>
				<BorderedButton
					color={Colors.btnOk}
					text="Modificar"
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
							<TopEndIconButton
								src={Icons.close}
								onPress={this.props.closeModal}
							/>
	
							<Text style={styles.title}>Ingreso</Text>
	
							<View style={{ flex: 3 }}>
								<IncomeForm
									incomeName={this.state.incomeName}
									incomeValue={this.state.incomeValue}
									changeHandler={this.changeHandler}
								/>
							</View>
	
							<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems:'center' }}>
								{this.props.isNewIncome ? addButton : updateDeleteButtons}
							</View>
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
		fontSize: 24,
		color: Colors.ModalTitleColor,

		textAlign: 'center',
		textAlignVertical: 'center',

		flex: 1
	},
});

export default AddIncomeModal;