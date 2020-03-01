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
				<View style = {{flex:2}}/>
				<Text style = {{...styles.title, backgroundColor: Colors.shadowBg,} }>{props.title}</Text>
			</TouchableOpacity>

		</ImageBackground>
	);

	let iconCell = (
		<View style = {{...styles.cell, backgroundColor: props.color}}>
			<TopEndIconButton	
				src = {Icons.info}
				onPress = {props.showModal}/>

			<TouchableOpacity onPress = {props.onPress} style = {{flex:1}}>
				<Image style = {styles.icon} source= {props.src}/>
				<Text style = {styles.title}>{props.title}</Text>
			</TouchableOpacity>

		</View>
	);

	return props.isSourceBg ? imageBackgroundCell : iconCell;
}

const styles = StyleSheet.create({
    cell:{
        flex:1,
		padding: 24,
		
        justifyContent: 'flex-end',
        alignItems:'center',
	},
    icon:{
		flex:2,
        resizeMode: 'contain'
    },
    title:{
        flex:1,
		marginTop: 16,

        color: 'white',
        fontSize: 16,
        fontFamily:'roboto',

        textAlign:'center',
        textAlignVertical:'center'
    },
})