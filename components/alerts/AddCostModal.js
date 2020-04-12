import React, { Component } from 'react';

import { Modal, View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions, Alert } from 'react-native';

import Icons from '../../assets/constants/Icons';
import Colors from '../../assets/constants/Colors';

import BorderedButton from '../buttons/BorderedButton';
import CostForm from '../forms/CostForm';
import TopEndIconButton from '../buttons/TopEndIconButton';
import { dropConfimation } from './Alerts';

class AddCostModal extends Component {

	constructor(props){
		super(props);

		this.initState = {
			costName: '',
			costValue: '',
			isPercent: false,
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

	addCost = (isUpdating = false) => {
		if (!this.state.costName || !this.state.costValue) {
			Alert.alert(
				'No dejes vacio los campos',
				'Ambos campos deben de poseer un valor',
				[{ text: 'OK', }]
			);
		} else if (typeof parseFloat(this.state.costValue) != 'number'){
			Alert.alert(
				'El campo debe ser un numero',
				'',
				[{ text: 'OK', }]
			);
		}else if(isUpdating){
			this.props.updateCost(this.state._id, this.state.costName, this.state.costValue, this.state.isPercent);
			this.setState({...this.initState});
			this.props.closeModal();
		} else{
			this.props.addCost(this.state.costName, this.state.costValue, this.state.isPercent, this.props.TAG);
			this.setState({...this.initState});
			this.props.closeModal();
		}
	}

	verifyFields = () => {
		this.props.isNewCost ? this.setState({...this.initState}) : this.setState ({
			...this.state,
			costName: this.props.oldCost.title,
			costValue: this.props.oldCost.money.toFixed(2),
			_id: this.props.oldCost._id,
		})
	}

	render() {
		
		const addButton = (
			<BorderedButton
				color={Colors.btnNeutral}
				text="Añadir"
				onPress = {() => {
					this.addCost();
				}}
			/>);
		
		const updateDeleteButtons = (
			<>
				<BorderedButton
					color={Colors.btnDelete}
					text="Eliminar"
					onPress = {()=>{
						dropConfimation(() => {
							this.props.removeCost(this.state._id);
							this.props.closeModal(); 
						});
					}}
					/>
				<BorderedButton
					color={Colors.btnOk}
					text="Modificar"
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
							<TopEndIconButton
								src={Icons.close}
								onPress={this.props.closeModal}
							/>
	
							<Text style={styles.title}>Gasto</Text>
	
							<View style={{ flex: 3, marginVertical: 8 }}>
								<CostForm
									incomeName={this.state.costName}
									incomeValue={this.state.costValue}
									isPercent = {this.state.isPercent}
									changeHandler={this.changeHandler}
								/>
							</View>
	
							<View style={{ flex: 2, flexDirection: 'row', justifyContent: "center", alignItems:'center' }}>
								{this.props.isNewCost ? addButton : updateDeleteButtons}
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