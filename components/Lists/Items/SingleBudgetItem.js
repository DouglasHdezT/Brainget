/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Icons from '../../../assets/constants/Icons';
import Colors from '../../../assets/constants/Colors';
import Dimens from '../../../assets/constants/Dimens';

import Translation, { Keys } from '../../../translation/TranslationHelper';

const SingleBudget = props => {
	return(
		<View style = { styles.mainContainer }>
			<View style = { styles.titleContainer }>
				
				<Text style = { styles.title }> { `${Translation.getStringValue(Keys.budget_result_title)} ${props.index}` } </Text>
				<Text style = { styles.content }> { `${Translation.getStringValue(Keys.from_prefix_text)} ${props.startDay} ${Translation.getStringValue(Keys.to_prefix_text)} ${props.endDay}` } </Text>
			
			</View>

			<View style = { styles.contentContainer }>
				<View style = { styles.summaryContainer }>
					
					<View style = { styles.valueContainer }>

						<Text style = {{ ...styles.content, flex:1, textAlign:"left" }}> {Translation.getStringValue(Keys.incomes_result_text)} </Text>
						<Text style = {{ ...styles.content, flex:1, textAlign:"right" }}>{ `$ ${props.totalIncome.toFixed(2)}` }</Text>
					
					</View>
					
					<View style = { styles.valueContainer }>
						
						<Text style = {{ ...styles.content, flex:1, textAlign:"left" }}>{ Translation.getStringValue(Keys.costs_result_text) }</Text>
						<Text style = {{ ...styles.content, flex:1, textAlign:"right" }}>{ `$ ${props.totalCosts.toFixed(2)}` }</Text>
					
					</View>
					
					<View style = { styles.valueContainer }>
						
						<Text style = {{ ...styles.content, flex:1, textAlign:"left" }}>{ Translation.getStringValue(Keys.balance_result_text) }</Text>
						<Text style = {{ ...styles.content, flex:1, textAlign:"right" }}>{ `$ ${props.totalBalance.toFixed(2)}` }</Text>
					
					</View>

				</View>

				<View style = { styles.actionContainer }>
					<TouchableOpacity onPress = {()=>{props.onPress()}}>
						<View style = {{ flexDirection:"row", alignItems:"center", justifyContent: "space-around"}}>
							<Text style = { styles.buttonText }>{ Translation.getStringValue(Keys.checkout_result_action_text) }</Text>
							<Image style = { styles.icon } source = { Icons.right_gray }/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	); 
}

const styles = StyleSheet.create({
	mainContainer: {
		width:"100%",
		marginBottom:8,

		alignItems: "stretch",
	},
	titleContainer:{
		flexDirection:"row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	contentContainer:{
		padding: Dimens.p,

		flexDirection:"row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	summaryContainer:{
		flex:1,
		marginLeft: 4,

		alignItems:"stretch"
	},
	valueContainer:{
		flexDirection:"row",
		alignItems: "center",
		justifyContent: "space-between",
	},	
	actionContainer:{
		flex:0.75,
		marginRight: 4,

		alignItems:"flex-end",
		justifyContent: "center"
	},
	title:{
		textAlignVertical:"center",

		fontFamily: "roboto",
		fontSize: Dimens.p + 2,
		color: "#000"
	},
	content:{
		textAlignVertical:"center",

		fontFamily: "roboto",
		fontSize: Dimens.p - 2,
		color: Colors.gray800
	},
	buttonText:{
		textAlignVertical:"center",

		fontFamily: "roboto-bold",
		fontSize: Dimens.p - 2,
		color: Colors.blue700
	},
	icon: {
		width: "10%",
		maxHeight: 10,
		marginLeft: 4,
		resizeMode:"cover"
	}
});

export default SingleBudget;