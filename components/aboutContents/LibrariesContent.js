/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react';

import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';

import Translation, { Keys } from '../../translation/TranslationHelper';
import Colors from '../../assets/constants/Colors';
import Dimens from '../../assets/constants/Dimens';

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
		fontSize: Dimens.h,
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
		fontSize: Dimens.h,
		fontFamily: "roboto",
		color: Colors.fontColorLight,
	},
	itemText: {
		fontSize: Dimens.p,
		fontFamily: "roboto",
		fontStyle: "italic",
		color: Colors.fontColorLight,

	}
});

export default LibrariesContent;