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

const ResourcesContent = props => {
	const imagesData = props.images.map((item, index) => renderItem(item, index));
	const iconsData = props.icons.map((item, index) => renderItem(item, index, true));

	const imageHalf = Math.ceil(imagesData.length / 2);
	const iconHalf = Math.ceil(iconsData.length / 2);

	return (
		<ScrollView style = {{ flex: 1 }}
			contentContainerStyle = {{ justifyContent: "center", alignItems: "stretch", flexGrow:1 }}>
		
			<Text style = { styles.title } > { Translation.getStringValue(Keys.images_attr_title) } </Text>

			<View style = { { flexDirection: "row", width: "100%", marginBottom: 32 } }>
				<View style = { {flex: 1} }>
					{ imagesData.slice(0, imageHalf) }
				</View>
				<View style = { {flex: 1} }>
					{ imagesData.slice(imageHalf, imagesData.length) }
				</View>
			</View>

			<Text style = { styles.title }> { Translation.getStringValue(Keys.icons_attr_tile) } </Text>
			
			<View style = { { flexDirection: "row", width: "100%" } }>
				<View style = { {flex: 1} }>
					{ iconsData.slice(0, iconHalf) }
				</View>
				<View style = { {flex: 1} }>
					{ iconsData.slice(iconHalf, iconsData.length) }
				</View>
			</View>
		</ScrollView>
	);
}

const renderItem = (item, index, icon = false) => {
	const maxHeight = icon ? 64 : 128
	return ( 
		<View key = {index} style = { styles.itemContainer }>
			<Image style = { {...styles.itemImage, maxHeight: maxHeight} } source = { item.source } />
			<Text style = { styles.itemText } > { Translation.getStringValue(item.author) } </Text>
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
		height: 256,
		padding: 16,
		justifyContent: "space-around",

		backgroundColor: Colors.shadowBg,
		borderRadius: 25,
		margin: 2,
	},
	itemImage: {
		resizeMode: "contain",
		width: "100%",
		maxHeight: 128,
		marginBottom: 8,
	},
	itemText: {
		fontSize: Dimens.p,
		fontFamily: "roboto",
		fontStyle: "italic",
		color: Colors.fontColorLight,

		textAlign: "center",
	}
});

export default ResourcesContent;