import React, { useState } from 'react';

import { StyleSheet, FlatList,  View, Text, Image, TouchableOpacity } from 'react-native';
import Icons from '../../assets/constants/Icons';
import Colors from '../../assets/constants/Colors';
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
		fontSize: 16,
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