/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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