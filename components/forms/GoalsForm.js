import React from 'react';

import { StyleSheet, TouchableWithoutFeedback, ScrollView, Keyboard } from 'react-native';
import LabeledMoneyInput from './inputs/LabeledMoneyInput';

import Translation, { Keys } from '../../translation/TranslationHelper';

const GoalsForm = props => {
	return (
		<TouchableWithoutFeedback onPress = { () => {Keyboard.dismiss()}}>
			<ScrollView style = {{flex:1}}
				contentContainerStyle = {{ flexGrow:1, justifyContent: "center" }}>
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
			</ScrollView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({});

export default GoalsForm;