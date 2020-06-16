/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { Modal, View, Text, ScrollView, StyleSheet } from 'react-native';
import TopEndIconButton from '../buttons/TopEndIconButton';

import Colors from '../../assets/constants/Colors';
import Icons from '../../assets/constants/Icons';

const InfoModal = props => {
	const maxHeight = props.tall ? "95%" : "60%";
	const maxWidth = props.tall ? "97%" : "90%";

	return(
		<Modal
			animationType="fade"
			transparent={true}
			visible={props.visible}
			onRequestClose = {props.closeModal}>

			<View style = {styles.modalBackground}>
				<View style = {{...styles.modalView, maxHeight: maxHeight, width: maxWidth}}>
					<TopEndIconButton
						src = {Icons.close}
						onPress = {props.closeModal}
						/>

					<Text style = {styles.title}>{props.title}</Text>
					
					<ScrollView
						style = { styles.textContainer }
						contentContainerStyle = { {flexGrow: 1, justifyContent: "center", marginHorizontal: 4} }>

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
		maxHeight: '60%',

		padding: 16,

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
		marginBottom: 16
	}
});

export default InfoModal;