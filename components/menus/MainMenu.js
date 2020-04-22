import React, { Component } from 'react';
import { StyleSheet, View, Modal } from 'react-native';

import { SubMenu } from './SubMenu';
import InfoModal from '../alerts/InfoModal'

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
			title={menu.title()}
			src={menu.src}
			color={menu.color}
			isSourceBg = {menu.isSourceBg}
			showModal = {()=>{this.showModal(menu.title(), menu.info())}}
			onPress = {()=>this.props.navigate(menu.redirect)}
		/>)

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
						{submenus.slice(0,3)}
					</View>

					<View style = {styles.column}>
						{submenus.slice(3,6)}
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