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