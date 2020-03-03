import React from 'react';

import { StyleSheet, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import LabeledMoneyInput from './inputs/LabeledMoneyInput';

const GoalsForm = props => {
	return (
		<TouchableWithoutFeedback onPress = { () => {Keyboard.dismiss()}}>
			<View style = {{flex:1}}>
				<LabeledMoneyInput 
					id = 'question1'
					changeHandler = {props.changeHandler}
					value = {props.question1}
					label = "¿Cuánto dinero gastarás?"/>
				<LabeledMoneyInput 
					id = 'question2'
					changeHandler = {props.changeHandler}
					value = {props.question2}
					label = "¿Cuánto deberías gastar?"/>
				<LabeledMoneyInput 
					id = 'question3'
					changeHandler = {props.changeHandler}
					value = {props.question3}
					label = "¿Cuánto quieres ahorrar?"/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({});

export default GoalsForm;