/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { useState } from 'react';

import { StyleSheet, FlatList,  View, Text, Image, TouchableOpacity } from 'react-native';
import Icons from '../../assets/constants/Icons';
import Colors from '../../assets/constants/Colors';
import Dimens from '../../assets/constants/Dimens';
import InfoModal from '../alerts/InfoModal';

const ServicesList = props => {
	const [ modalVisibility, setModalVisibility ] = useState (false);
	const [ modalInfo, setModalInfo ] = useState({title: "", text: ""});

	const flex = props.flex ? props.flex : 1;

	const renderItem = (item, index, important = false) => {
		const topBorder = (important || index == 0) ? 15 : 0;
		const botBorder = (important || index == (props.items.length -1)) ? 15 : 0;

		return (
			<TouchableOpacity
				style = { {...styles.itemContainer, borderTopStartRadius: topBorder, borderBottomEndRadius: botBorder} }
				onPress = {() => { 
					setModalInfo({ title: item.title, text: item.text });
					setModalVisibility(true); 
				}}>

				<Text style = { styles.itemText } > { item.title } </Text>
				<Image style = { styles.itemIcon } source = { Icons.right } />
			
			</TouchableOpacity>
		);
	}

	return(
		<>
			<InfoModal tall
				visible = { modalVisibility }
				closeModal = { () => { setModalVisibility(false) } }
				title = { modalInfo.title }
				text = { modalInfo.text }
				/>

			{ renderItem(props.biography, 0, true) }

			<FlatList 
				style = { {flex: flex, width: "100%", marginTop: 16} }
				renderItem = { ({ item, index }) => renderItem(item, index) }
				data = { props.items }
				keyExtractor = { item => item.title }
			/>
		</>
	);
}

const styles = StyleSheet.create({
	itemContainer: {
		width: "100%",
		padding: 16,

		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",

		backgroundColor: Colors.shadowBg,
	},
	itemText: {
		flex: 2,
		marginEnd: 8,
		fontSize: Dimens.p,
		fontFamily: "roboto",
		color: Colors.fontColorLight,

	},
	itemIcon: {
		flex: 1,
		maxWidth: 16,
		maxHeight: 16,

		resizeMode: "center",
	}
});

export default ServicesList;