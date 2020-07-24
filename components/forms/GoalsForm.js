/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, TouchableWithoutFeedback, ScrollView, Keyboard } from 'react-native';
import LabeledMoneyInput from './inputs/LabeledMoneyInput';
import LabeledTextInput from './inputs/LabeledTextInput';

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
				<LabeledTextInput 
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