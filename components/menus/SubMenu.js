import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';

import TopEndIconButton from '../buttons/TopEndIconButton';

import Colors from '../../assets/constants/Colors';

export const SubMenu = props => {

	if( props.isSourceBg ){
		return(
			<ImageBackground
				source = {props.src}
				style = {{...styles.cell}}>

				<TopEndIconButton	
					src = {require('../../assets/img/info.png')}
					onPress = {props.showModal}/>

				<TouchableOpacity onPress = {props.onClick} style = {{flex:1}}>
					<View style = {{flex:2}}/>
					<Text style = {{...styles.title, backgroundColor: Colors.shadowBg,} }>{props.title}</Text>
				</TouchableOpacity>

			</ImageBackground>
		);
	}

    return(
        <View style = {{...styles.cell, backgroundColor: props.color}}>
			<TopEndIconButton	
				src = {require('../../assets/img/info.png')}
				onPress = {props.showModal}/>

            <TouchableOpacity onPress = {props.onClick} style = {{flex:1}}>
				<Image style = {styles.icon} source= {props.src}/>
				<Text style = {styles.title}>{props.title}</Text>
			</TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    cell:{
        flex:1,
        padding: 24,
        minHeight:"33.33%",
        maxWidth:"50%",

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