import React from 'react';

import {StyleSheet, View} from 'react-native';

const FootLeftRight = props => {
	
	return (
		<View style = {styles.container}>
			<View style = {{...styles.box, backgroundColor: props.leftPanelColor}}>
				{props.leftContent}
			</View>
			<View style = {{...styles.box, backgroundColor: props.rightPanelColor}}>
				{props.rightContent}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		maxHeight: 56,
		flexDirection:'row',
	},
	box:{
		flex:1,
		padding: 8,

		justifyContent: 'center',
		alignItems:'center'
	}
});

export default FootLeftRight;