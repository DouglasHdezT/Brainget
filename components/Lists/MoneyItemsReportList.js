/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View } from 'react-native';
import SingleReportItem from './Items/SingleReportItem';
import DividerHorizontal from '../design/DividerHorizontal';

const MoneyItemsReportList = props => {
	const itemList = props.items.map((item, index, array) => {
		const divider = <DividerHorizontal  />
		return (
			<React.Fragment key = { `${item._id}Div` }>
				<SingleReportItem
					title = {item.title} 
					money = { item.money.toFixed(2) }
					isTaxable = { item.taxable } 
					date= {item.createdAt}/>
				{ index < (array.lenght - 1) && divider }
			</React.Fragment>
		); 
	});

	return (
		<View style = {styles.container}>
			{itemList}
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		padding: 8,
		marginHorizontal: 16,

		backgroundColor: "#fff"
	}
});

export default MoneyItemsReportList;