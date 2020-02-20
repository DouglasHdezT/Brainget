import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'; 

export const SubMenu = props => {
    return(
        <View style = {{...styles.cell, backgroundColor: props.color}}>

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
    title:{
        flex:1,
        marginTop: 8,

        color: 'white',
        fontSize: 16,
        fontFamily:'roboto',

        textAlign:'center',
        textAlignVertical:'center'
    }
})