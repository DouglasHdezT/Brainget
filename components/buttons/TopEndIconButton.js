import React from 'react';

import { TouchableHighlight, Image, StyleSheet } from 'react-native';

const TopEndIconButton = props => {
	return(
		<TouchableHighlight 
			style= {styles.iconContainer} 
			underlayColor = '#ffffff00'
			onPress = {props.onPress}>
			<Image 
				style= {styles.icon} 
				source = {props.src}/>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	iconContainer:{
        height: 40,
		width:40,
		
		alignItems:'center',
		justifyContent: 'center',

        position: 'absolute',
        right: 0,
        top: 0
	},
	icon:{
		height:24,
		width:24
	},
});

export default TopEndIconButton;