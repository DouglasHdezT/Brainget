import React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Icons from '../../../assets/constants/Icons';
import Colors from '../../../assets/constants/Colors';

const SingleBudget = props => {
	return(
		<View style = { styles.mainContainer }>
			<View style = { styles.titleContainer }>
				
				<Text style = { styles.title }> { `Presupuesto ${props.index}` } </Text>
				<Text style = { styles.content }> { `Del ${props.startDay} al ${props.endDay}` } </Text>
			
			</View>

			<View style = { styles.contentContainer }>
				<View style = { styles.summaryContainer }>
					
					<View style = { styles.valueContainer }>

						<Text style = {{ ...styles.content, flex:1, textAlign:"left" }}>Ingresos:</Text>
						<Text style = {{ ...styles.content, flex:1, textAlign:"right" }}>{ `$ ${props.totalIncome.toFixed(2)}` }</Text>
					
					</View>
					
					<View style = { styles.valueContainer }>
						
						<Text style = {{ ...styles.content, flex:1, textAlign:"left" }}>Gastos:</Text>
						<Text style = {{ ...styles.content, flex:1, textAlign:"right" }}>{ `$ ${props.totalCosts.toFixed(2)}` }</Text>
					
					</View>
					
					<View style = { styles.valueContainer }>
						
						<Text style = {{ ...styles.content, flex:1, textAlign:"left" }}>Balance:</Text>
						<Text style = {{ ...styles.content, flex:1, textAlign:"right" }}>{ `$ ${props.totalBalance.toFixed(2)}` }</Text>
					
					</View>

				</View>

				<View style = { styles.actionContainer }>
					<TouchableOpacity onPress = {()=>{props.onPress()}}>
						<View style = {{ flexDirection:"row", alignItems:"center", justifyContent: "space-around"}}>
							<Text style = { styles.buttonText }>Ver Balance</Text>
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
		padding: 16,

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
		fontSize: 18,
		color: "#000"
	},
	content:{
		textAlignVertical:"center",

		fontFamily: "roboto",
		fontSize: 14,
		color: Colors.gray800
	},
	buttonText:{
		textAlignVertical:"center",

		fontFamily: "roboto",
		fontSize: 14,
		color: "#000"
	},
	icon: {
		width: "10%",
		maxHeight: 10,
		marginLeft: 4,
		resizeMode:"cover"
	}
});

export default SingleBudget;