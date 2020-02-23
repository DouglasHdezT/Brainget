import React from 'react';

import { Modal, View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';
import TopEndIconButton from '../buttons/TopEndIconButton';

import Colors from '../../assets/constants/Colors';

const InfoModal = props => {
	return(
		<Modal
			animationType="fade"
			transparent={true}
			visible={props.visible}
			onRequestClose = {props.closeModal}>

			<View style = {styles.modalBackground}>
				<View style = {styles.modalView}>
					<TopEndIconButton
						src = {require('../../assets/img/close.png')}
						onPress = {props.closeModal}
						/>

					<Text style = {styles.title}>{props.title}</Text>
					<Text style = {styles.text}>{props.text}</Text>
				</View>
			</View>

		</Modal>
	);
}

const styles = StyleSheet.create({
	modalBackground:{
		flex:1,

		justifyContent:'center',
		alignItems:'center',
		backgroundColor: Colors.shadowBg,
	},
	modalView: {
		width: '90%',
		minHeight: '50%',

		padding: 24,

		backgroundColor: '#fff',

		borderTopStartRadius: 15,
		borderBottomEndRadius: 15,

		justifyContent: 'center',
	},
	title:{
		fontFamily: 'roboto-bold',
		fontSize: 24,
		color:Colors.ModalTitleColor,
		
		textAlign:'center',
		textAlignVertical:'center',

		flex: 1
	},

	text:{
		marginTop: 16,
		flex:3,

		fontFamily: 'roboto',
		fontSize: 16,
		color:Colors.ModalTextColor,

		textAlign: 'justify',
	}
});

export default InfoModal;