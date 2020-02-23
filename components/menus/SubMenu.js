import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';

import TopEndIconButton from '../buttons/TopEndIconButton';

import Colors from '../../assets/constants/Colors';

export const SubMenu = props => {

	if( props.isSourceBg ){
		return(
			<ImageBackground
				source = {props.src}
				style = {{...styles.cell}}>

				<TopEndIconButton	
					src = {require('../../assets/img/acerca_de.png')}
					onPress = {props.showModal}/>

				<View style = {{flex:2}}/>
				<Text style = {{...styles.title, backgroundColor: Colors.shadowBg,} }>{props.title}</Text>

			</ImageBackground>
		);
	}

    return(
        <View style = {{...styles.cell, backgroundColor: props.color}}>
			<TopEndIconButton	
				src = {require('../../assets/img/acerca_de.png')}
				onPress = {props.showModal}/>

            <Image style = {styles.icon} source= {props.src}/>
            <Text style = {styles.title}>{props.title}</Text>

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

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
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