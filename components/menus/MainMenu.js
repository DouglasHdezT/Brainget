import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { SubMenu } from './SubMenu';
import InfoModal from '../alerts/InfoModal';

import Translation from '../../translation/TranslationHelper';

export default class MainMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalVisibility: false,
			modalTitle: '',
			modalText: ''
		}
	}

	showModal = (title ,text) => {
		this.setState({
			modalVisibility: true,
			modalTitle: title,
			modalText: text,
		})
	}

	closeModal = () => {
		this.setState({
			modalVisibility: false,
			modalTitle: '',
			modalText: '',
		})	
	}

	render() {
		const submenus = this.props.menus.map((menu, index) => <SubMenu
			key={index}
			title={Translation.getStringValue(menu.title)}
			info={Translation.getStringValue(menu.info)}
			src={menu.src}
			color={menu.color}
			isSourceBg = {menu.isSourceBg}
			showModal = {()=>{this.showModal(Translation.getStringValue(menu.title), Translation.getStringValue(menu.info))}}
			onPress = {()=>this.props.navigate(menu.redirect)}
		/>)

		const slicedCount = Math.ceil(this.props.menus.length / 2);

		return (
			<View style={{flex:1, width:'100%'}}>
				<InfoModal
					visible = {this.state.modalVisibility}
					closeModal = {this.closeModal}
					title = {this.state.modalTitle}
					text = {this.state.modalText}
					/>

				<View style={styles.main}>
					<View style = {styles.column}>
						{submenus.slice(0,slicedCount)}
					</View>

					<View style = {styles.column}>
						{submenus.slice(slicedCount,this.props.menus.length)}
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'row'
	},
	column:{
		flex: 1,
		flexDirection: 'column'
	}
});