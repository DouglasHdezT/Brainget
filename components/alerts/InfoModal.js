import React from 'react';

import { Modal, View, Text, ScrollView, StyleSheet } from 'react-native';
import TopEndIconButton from '../buttons/TopEndIconButton';

import Colors from '../../assets/constants/Colors';
import Icons from '../../assets/constants/Icons';

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
						src = {Icons.close}
						onPress = {props.closeModal}
						/>

					<Text style = {styles.title}>{props.title}</Text>
					
					<ScrollView
						style = { styles.textContainer }
						contentContainerStyle = { {flexGrow: 1, justifyContent: "center", marginHorizontal: 12} }>

						<Text style = {styles.text}>{props.text}</Text>
					
					</ScrollView>
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
		maxHeight: '60%',

		padding: 24,

		backgroundColor: '#fff',

		borderTopStartRadius: 15,
		borderBottomEndRadius: 15,

		justifyContent: 'center',
	},
	title:{
		padding: 16,
		fontFamily: 'roboto-bold',
		fontSize: 24,
		color:Colors.ModalTitleColor,
		
		textAlign:'center',
		textAlignVertical:'center',

	},
	textContainer:{
		marginTop: 8,
	},
	text:{
		fontFamily: 'roboto',
		fontSize: 16,
		color:Colors.ModalTextColor,

		textAlign: 'justify',
	}
});

export default InfoModal;