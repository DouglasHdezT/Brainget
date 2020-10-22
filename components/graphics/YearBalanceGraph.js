/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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