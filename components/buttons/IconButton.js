import React from 'react';

import { StyleSheet, TouchableOpacity, Image, } from 'react-native';

const IconButton = props => {
	const iconSize = props.iconSize ? props.iconSize : 16; 

	return (
		<TouchableOpacity
			onPress = { () => { props.onPress(); } } 
			style = { {...props.style, ...styles.mainContainer} }>

			<Image style = { {...styles.icon, maxHeight: iconSize, maxWidth:iconSize,} } source = { props.image } />

		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		justifyContent: "center", 
		alignItems:"center",
	},
	icon:{
		resizeMode:"center"
	}
});

export default IconButton;