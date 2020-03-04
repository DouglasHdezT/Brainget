import React, { Component } from 'react';

import { Modal, View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions, Alert } from 'react-native';

import Icons from '../../assets/constants/Icons';
import Colors from '../../assets/constants/Colors';

import BorderedButton from '../buttons/BorderedButton';
import IncomeForm from '../forms/IncomeForm';
import TopEndIconButton from '../buttons/TopEndIconButton';

const initState = {
	incomeName: '',
	incomeValue: '',
}

class AddIncomeModal extends Component {

	constructor(props){
		super(props);

		this.state = {
			...initState,
		}
	}

	changeHandler = (id, value) => {
		this.setState({
			[id]: value
		})
	}

	render() {
		return (
			<Modal
				animationType="fade"
				transparent={true}
				visible={this.props.visible}

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
								<BorderedButton
									color={Colors.indigo900}
									text="Añadir"
									onPress = {() => {
										if (!this.state.incomeName || !this.state.incomeValue) {
											Alert.alert(
												'No dejes vacio los campos',
												'Ambos campos deben de poseer un valor',
												[
													{
														text: 'OK',
													}
												]
											);
										} else if (typeof parseFloat(this.state.incomeValue) != 'number'){
											Alert.alert(
												'El campo debe ser un numero',
												'',
												[
													{
														text: 'OK',
													}
												]
											);
										}else{
											this.props.addIncome(this.state.incomeName, this.state.incomeValue);
											this.setState({...initState});
										}
										
									}}
								/>
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