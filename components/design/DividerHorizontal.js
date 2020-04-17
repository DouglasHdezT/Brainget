import React from 'react';

import { StyleSheet, View } from 'react-native';
import Colors from '../../assets/constants/Colors'

const DividerHorizontal = props => {
	const width = props.width ? props.width : "70%";

	return (
		<View style= { {... styles.container} }>
			<View style = {{...styles.view, width: width}} />
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		height:1,
		width:"100%",
		alignItems:"center",
		justifyContent:"center"
	},
	view:{
		backgroundColor: Colors.gray400,
		width: "70%",
		height:1
	}
});

export default DividerHorizontal;