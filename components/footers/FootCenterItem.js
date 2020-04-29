import React from 'react';

import { StyleSheet, View } from 'react-native';

const FootCenterItem = props => {
	return (
		<View style = { {...styles.container, backgroundColor: props.color} }>
			<View style = { styles.box }>
				{ props.content }
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		maxHeight: 56,
		flexDirection:'row',

		alignItems: "stretch",
		justifyContent: "center"
	},
	box:{
		padding: 8,
		flex:1,

		justifyContent: 'center',
		alignItems:'stretch'
	}
});

export default FootCenterItem;