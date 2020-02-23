import React, { Component } from 'react';
import { StyleSheet, View, Modal } from 'react-native';

import { SubMenu } from './SubMenu';
import InfoModal from '../alerts/InfoModal'

export default class SixMenu extends Component {
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
			title={menu.title}
			src={menu.src}
			color={menu.color}
			isSourceBg = {menu.isSourceBg}
			showModal = {()=>{this.showModal(menu.title, menu.info)}}
		/>)

		return (
			<View style={{ justifyContent:'center', alignItems:'center' }}>
				<InfoModal
					visible = {this.state.modalVisibility}
					closeModal = {this.closeModal}
					title = {this.state.modalTitle}
					text = {this.state.modalText}
					/>

				<View style={styles.main}>
					{submenus}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flexWrap: 'wrap',

		justifyContent: 'center',
	},
});