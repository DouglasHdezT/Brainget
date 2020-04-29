import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import Translation, { Keys } from '../../../translation/TranslationHelper';

const PeriodContainer = props => {
	return(
		<View style = { styles.container }>
			<Text style = {styles.text}> { Translation.getStringValue(Keys.period_prefix_footer_text) } </Text>
			<Text style = {styles.text}> { props.period }</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		width:'100%',
		flex:1,

		flexDirection: 'column',
		justifyContent: 'center',
		alignItems:'center'
	},
	text:{
		textAlign: 'center',
		textAlignVertical:'center',

		fontSize: 16,
		fontFamily: 'roboto',

		color:'#fff',

		flex: 3
	},
});

export default PeriodContainer;