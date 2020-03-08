import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';

import TopEndIconButton from '../buttons/TopEndIconButton';

import Colors from '../../assets/constants/Colors';
import Icons from '../../assets/constants/Icons';

export const SubMenu = props => {

	const imageBackgroundCell = (
		<ImageBackground
			source = {props.src}
			style = {{...styles.cell}}>

			<TopEndIconButton	
				src = {Icons.info}
				onPress = {props.showModal}/>

			<TouchableOpacity onPress = {props.onPress} style = {{flex:1}}>
				<View style = {{flex:1.75}}/>
				<View style = {{...styles.titleContainer, backgroundColor: Colors.shadowBg, borderTopStartRadius:15, borderBottomEndRadius:15}}>
					<Text style = {styles.title }>{props.title}</Text>
				</View>
			</TouchableOpacity>

		</ImageBackground>
	);

	let iconCell = (
		<View style = {{...styles.cell, backgroundColor: props.color}}>
			<TopEndIconButton	
				src = {Icons.info}
				onPress = {props.showModal}/>

			<TouchableOpacity onPress = {props.onPress} style = {{flex:1, alignItems:"center", justifyContent:'flex-end'}}>
				<Image style = {styles.icon} source= {props.src}/>
				<View style = {styles.titleContainer}>
					<Text style = {styles.title}>{props.title}</Text>
				</View>
			</TouchableOpacity>

		</View>
	);

	return props.isSourceBg ? imageBackgroundCell : iconCell;
}

const styles = StyleSheet.create({
    cell:{
        flex:1,
		padding: 16,
	},
    icon:{
		width: 128,
		flex:2,
		resizeMode: 'contain'
	},
	titleContainer:{
		flex:1,
		marginTop: 8,
		padding:8,

		justifyContent:'center',
		alignItems:"stretch"
	},
    title:{
        color: 'white',
        fontSize: 16,
		fontFamily:'roboto',

		textAlign:"center", 
		textAlignVertical:"center"
    },
})