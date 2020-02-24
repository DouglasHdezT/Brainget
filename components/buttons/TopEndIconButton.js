import React from 'react';

import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const TopEndIconButton = props => {
	return(
		<TouchableOpacity 
			style= {styles.iconContainer} 
			onPress = {props.onPress}>
			<Image 
				style= {styles.icon} 
				source = {props.src}/>
		</TouchableOpacity>
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