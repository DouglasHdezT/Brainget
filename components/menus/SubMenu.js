/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';

import TopEndIconButton from '../buttons/TopEndIconButton';

import Colors from '../../assets/constants/Colors';
import Icons from '../../assets/constants/Icons';

export const SubMenu = props => {
	const canShowInfo = (props.info !== undefined && props.info !== "") ? true : false;

	const imageBackgroundCell = (
		<ImageBackground
			source = {props.src}
			style = {{...styles.cell}}>

			<TouchableOpacity onPress = {props.onPress} style = {{flex:1}}>
				<View style = {{flex:1.75}}/>
				<View style = {{...styles.titleContainer, backgroundColor: Colors.shadowBg, borderTopStartRadius:15, borderBottomEndRadius:15}}>
					<Text style = {styles.title }>{props.title}</Text>
				</View>
			</TouchableOpacity>

			{canShowInfo && <TopEndIconButton	
				src = {Icons.info}
				onPress = {props.showModal}/>}

		</ImageBackground>
	);

	let iconCell = (
		<View style = {{...styles.cell, backgroundColor: props.color}}>
			{canShowInfo && <TopEndIconButton	
				src = {Icons.info}
				onPress = {props.showModal}/>}

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