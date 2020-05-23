import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import LabelDropInput from './inputs/LabelDropInput';
import LabelAsideDropMoney from './inputs/LabelAsideDropMoney';
import IconButton from '../buttons/IconButton';
import Icons from '../../assets/constants/Icons';

const CostForm = props => {
	return (
		<View style={{ flex: 1 }}>
			<LabelDropInput
				id='costName'
				value={props.incomeName}
				options = { props.options }
				changeHandler={props.changeHandler}
			/>
			<View style = { styles.horizontalContainer }>
				<LabelAsideDropMoney
					id='costValue'
					value={props.incomeValue}
					isPercent={props.isPercent}
					changeHandler={props.changeHandler}
				/>
				<IconButton
					style = { styles.icon }
					iconSize = { 32 }
					image = { props.isTaxable ? Icons.tax_selected : Icons.tax_unselected }
					onPress = { () => { props.changeHandler("isTaxable", !props.isTaxable) } }
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	horizontalContainer: {
		flexDirection: "row",

		justifyContent:"space-between",
		alignItems: "center",
		
		marginTop:20,
	},
	icon: {
		marginHorizontal:16,
		flex: 0.3,
	}
});

export default CostForm;