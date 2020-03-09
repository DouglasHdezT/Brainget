import React from 'react';

import { StyleSheet, View } from 'react-native';
import LabelDropInput from './inputs/LabelDropInput';
import LabelAsideDropMoney from './inputs/LabelAsideDropMoney';

const CostForm = props => {
	return (
		<View style={{ flex: 1 }}>
			<LabelDropInput
				id='costName'
				value={props.incomeName}
				changeHandler={props.changeHandler}
			/>
			<LabelAsideDropMoney
				id='costValue'
				value={props.incomeValue}
				isPercentage={props.isPercent}
				changeHandler={props.changeHandler}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});

export default CostForm;