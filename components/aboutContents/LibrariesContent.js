import React from 'react';

import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';

import Translation, { Keys } from '../../translation/TranslationHelper';
import Colors from '../../assets/constants/Colors';

const LibrariesContent = props => {
	const mainData = props.main.map((item, index) => renderItem(item, index));
	const auxData = props.aux.map((item, index) => renderItem(item, index));

	return (
		<ScrollView style = {{ flex: 1 }}
			contentContainerStyle = {{ justifyContent: "center", alignItems: "stretch", flexGrow:1 }}>
		
			<Text style = { styles.title } > { Translation.getStringValue(Keys.main_libraries_title) } </Text>

			<View style = { { width: "100%", marginBottom: 32 } }>
				{ mainData }
			</View>

			<Text style = { styles.title }> { Translation.getStringValue(Keys.aux_libraries_title) } </Text>
			
			<View style = { { width: "100%", marginBottom: 32 } }>
				{ auxData }
			</View>
		</ScrollView>
	);
}

const renderItem = (item, index) => {
	return ( 
		<View key = {index} style = { styles.itemContainer }>
			<Text style = { styles.itemTitle } > { Translation.getStringValue(item.name) } </Text>
			<Text style = { styles.itemText } > { `Version: ${Translation.getStringValue(item.version)}` } </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontFamily: "roboto-bold",
		color: Colors.fontColorLight,

		textAlignVertical: "center",
		textAlign: "center",
		marginBottom: 16
	},
	itemContainer: {
		padding: 16,
		justifyContent: "space-around",

		backgroundColor: Colors.shadowBg,
		marginBottom:8,
	},
	itemTitle: {
		fontSize: 20,
		fontFamily: "roboto",
		color: Colors.fontColorLight,
	},
	itemText: {
		fontSize: 16,
		fontFamily: "roboto",
		fontStyle: "italic",
		color: Colors.fontColorLight,

	}
});

export default LibrariesContent;