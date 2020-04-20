import React, { useState } from 'react';

import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import Colors from '../../assets/constants/Colors';
import { intToMonth } from '../../utils/DateUtils';

const YearBalanceGraph = props => {
	const chartConfig = {
		backgroundColor: "#e26a00",
		backgroundGradientFrom: "#fb8c00",
		backgroundGradientFromOpacity:0,
		backgroundGradientTo: "#ffa726",
		backgroundGradientToOpacity: 0,
		strokeWidth:2,
		decimalPlaces: 2, // optional, defaults to 2dp
		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		style: {
			borderRadius: 16
		},
		propsForDots: {
			r: "6",
			strokeWidth: "3",
			stroke: "#fff",
			strokeOpacity: 0.4
		},
		propsForLabels:{
			fontWeight: "bold"
		}
	}

	const data = getData(props.items)

	return (
		<ScrollView style={{ width: "100%" }}
			indicatorStyle = "white"
			showsHorizontalScrollIndicator = { true }
			contentContainerStyle={{ paddingVertical: 16, flexGrow: 1, justifyContent: "center" }}
			centerContent={true}
			horizontal={true}>
			{ props.isLoading ||
				<LineChart
					data={data}
					getDotColor={(dataPoint, index) => { return dataPoint < 0 ? Colors.red700 : Colors.green700 }}
					height={props.height}
					width={Dimensions.get("window").width * 2}
					chartConfig={chartConfig}
					segments = { 8 }
					bezier
					style={{
						borderBottomEndRadius: 15,
						borderTopStartRadius: 15
					}}
				/>
			 }
		</ScrollView>
	);
}

const getData = (items) => {
	let data = [];
	let labels = [];

	for (let i = 0; i < 12 ; i++){
		let item = items.find(element => element.monthInt == i);

		data = [...data, item !== undefined ? item.monthlyBalance : 0]
		labels = [...labels, intToMonth(i).substring(0,3)]
	}

	/* console.log(labels);
	console.log(data); */


	return {
		labels: labels.length == 0 ? ["No data"] : labels,
		datasets: [{
			data: data.length == 0 ? [0] : data
		}]
	}
}

const styles = StyleSheet.create({});

export default YearBalanceGraph;