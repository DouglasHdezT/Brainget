import React from 'react';
import {StyleSheet, View, Text, Image, Modal} from 'react-native';

export const SubMenu = props => {
    return(
        <View style = {{...styles.cell, backgroundColor: props.color}}>
            <Image style= {styles.aboutIcon} source = {require('../../assets/img/acerca_de.png')}/>

            <Image style = {styles.icon} source= {props.src}/>
            <Text style = {styles.title}>{props.title}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    cell:{
        flex:1,
        padding: 24,

        justifyContent: 'center',
        alignItems:'center',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    icon:{
        flex:2,
        resizeMode: 'contain'
    },
    aboutIcon:{
        height: 24,
        width:24,

        position: 'absolute',
        right: 8,
        top: 8
    },
    title:{
        flex:1,
        marginTop: 16,

        color: 'white',
        fontSize: 16,
        fontFamily:'roboto',

        textAlign:'center',
        textAlignVertical:'center'
    }
})