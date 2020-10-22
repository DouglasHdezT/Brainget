/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import Translation, { Keys } from '../translation/TranslationHelper';
import Categories, { COST_TYPE } from '../assets/constants/ReportItems';
import Colors from '../assets/constants/Colors';


export default class HTMLReportBuilder {
	constructor(){
		this.header = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Report</title>
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
					@page {
						margin: 10%;
					}
					body {
						font-family: "Roboto";
					}
					
					h1 {
						margin: 0 25px;
						padding: 20px 10px;
						text-align: center;
						color: ${Colors.indigo900};

						border-bottom: 1px solid ${Colors.indigo900};
					}

					h2{
						font-size: larger;
						text-align: center;
					}

					h3 {
						margin-top: 30px;
						font-size: large;

						color: #555;
					}

					table{
						width: 90%;
						margin: 10px auto;
						border-collapse: collapse;
					}
					tr>th{
						color: white;
						background-color: ${Colors.indigo900};
						padding: 10px;
					}

					td {
						text-align: center;
						vertical-align: middle;
						padding: 5px;
					}

					td:first-child {
						text-align: left;
					}

					table:last-child tr>td {
						text-align: center;
					}

					tr:nth-child(odd){
						background-color: #eee;
					}
				</style>
			</head>
			<body>
					<h1> ${Translation.getStringValue(Keys.app_title_text)} ${Translation.getStringValue(Keys.report_result_title)} </h1>
		`;

		this.closeTags = `
			</body>
			</html>
		`;

		this.title;
		this.mainReport;
		this.finalReport
	}

	setReportDate = (reportDate) => {
		this.title = `<h2> ${Translation.getStringValue(Keys.report_screen_title)} ${reportDate} </h2>`;
	}

	setItems = (incomes, expenses, totalIncome, totalCosts, currentBalance) => {
		const newItems = mapLists(incomes, expenses);

		this.mainReport = newItems.reduce((result, item) => {
			const mappedText = `<h3> ${Translation.getStringValue(item.title)} </h3> 
				<table>
					<tr>
						<th> ${ Translation.getStringValue(Keys.title_report_title) } </th>
						<th> ${ Translation.getStringValue(Keys.concept_report_title) } </th>
						<th> ${ Translation.getStringValue(Keys.date_report_title) } </th>
						${item.type === COST_TYPE ? `<th> ${Translation.getStringValue(Keys.taxable_report_title)} </th>` : ""}
					</tr>`;
			
			let newResult = item.itemList.reduce((vals,value) => {
				return vals + `
					<tr>
						<td> ${value.titleKey ? Translation.getStringValue(value.titleKey) : value.title} </td>
						<td> $ ${value.money.toFixed(2)} </td>
						<td> ${new Date(value.createdAt).toLocaleDateString()} </td>
						${item.type === COST_TYPE ? `<td> ${value.taxable ? Translation.getStringValue(Keys.taxable_report_yes) : Translation.getStringValue(Keys.taxable_report_no)} </td>` : ""}
					</tr>
				`;
			}, mappedText);

			newResult = newResult + "</table>";

			return result + newResult;
		}, "");

		this.finalReport = `
			<h3> ${Translation.getStringValue(Keys.total_balance_report_title)} </h3>
			
			<table>
				<tr>
					<th>${Translation.getStringValue(Keys.incomes_result_text)}</th>
					<th>${Translation.getStringValue(Keys.costs_result_text)}</th>
					<th>${Translation.getStringValue(Keys.balance_result_text)}</th>
				</tr>
				<tr>
					<td>$ ${totalIncome.toFixed(2)}</td>
					<td>$ ${totalCosts.toFixed(2)}</td>
					<td>$ ${currentBalance.toFixed(2)}</td>
				</tr>
			</table>
		`;
	}

	build = () => {
		return this.header 
			+ this.title 
			+ this.mainReport
			+ this.finalReport 
		+ this.closeTags;
	}
}

const mapLists = (incomes, expenses) => {
	let newItems = [];

	Categories.forEach((item, index) => {
		let itemList = []
		
		if(item.type === COST_TYPE){
			itemList = expenses.filter(cost => cost.TAG === item.TAG)
		}else{
			itemList = incomes;
		}

		if (itemList.length > 0){
			newItems = [...newItems, { title: item.title,type: item.type, itemList: itemList }]
		}
	})
	
	return newItems;
}