import React from 'react';

import { StyleSheet, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import LabeledMoneyInput from './inputs/LabeledMoneyInput';

import Translation, { Keys } from '../../translation/TranslationHelper';

const GoalsForm = props => {
	return (
		<TouchableWithoutFeedback onPress = { () => {Keyboard.dismiss()}}>
			<View style = {{flex:1}}>
				<LabeledMoneyInput 
					id = 'question1'
					changeHandler = {props.changeHandler}
					value = {props.question1}
					label = { Translation.getStringValue(Keys.goals_screen_section_2_q1) }/>
				<LabeledMoneyInput 
					id = 'question2'
					changeHandler = {props.changeHandler}
					value = {props.question2}
					label = { Translation.getStringValue(Keys.goals_screen_section_2_q2) }/>
				<LabeledMoneyInput 
					id = 'question3'
					changeHandler = {props.changeHandler}
					value = {props.question3}
					label = { Translation.getStringValue(Keys.goals_screen_section_2_q3) }/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({});

export default GoalsForm;