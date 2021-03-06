/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View } from 'react-native';
import LabelDropInput from './inputs/LabelDropInput';
import LabelAsidesInput from './inputs/LabelAsidesInput';

import Translation from '../../translation/TranslationHelper';

const IncomeForm = props => {
	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
			<LabelDropInput
				id='incomeName'
				value={props.incomeKey ? Translation.getStringValue(props.incomeKey) : props.incomeName}
				changeHandler={(id, text, index = -1) => {
					if(index > 0){
						props.changeHandler("incomeKey", props.options[index].key);
					}else{
						props.changeHandler("incomeKey", undefined);
					}

					props.changeHandler(id, text);
				}}
				options = { props.options.map(item => item.text) }
			/>
			<LabelAsidesInput
				id='incomeValue'
				isNew={props.isNew}
				isAdding={props.isAdding}
				value={props.incomeValue}
				changeHandler={props.changeHandler}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});

export default IncomeForm;