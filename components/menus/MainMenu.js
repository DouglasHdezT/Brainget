/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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