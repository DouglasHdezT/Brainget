import React from 'react';

import { StyleSheet, View } from 'react-native';
import LabelDropInput from './inputs/LabelDropInput';
import LabelAsidesInput from './inputs/LabelAsidesInput';

const IncomeForm = props => {
	return (
		<View style={{ flex: 1 }}>
			<LabelDropInput
				id='incomeName'
				value={props.incomeName}
				changeHandler={props.changeHandler}
			/>
			<LabelAsidesInput
				id='incomeValue'
				value={props.incomeValue}
				changeHandler={props.changeHandler}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});

export default IncomeForm;