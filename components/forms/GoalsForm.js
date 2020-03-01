import React from 'react';

import { StyleSheet, Text } from 'react-native';
import LabeledMoneyInput from './inputs/LabeledMoneyInput';

const GoalsForm = props => {
	return (
		<>
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
		</>
	);
}

const styles = StyleSheet.create({});

export default GoalsForm;