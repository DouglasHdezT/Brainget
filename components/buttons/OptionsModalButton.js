/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { Component } from 'react';

import { StyleSheet, TouchableOpacity ,Modal, Image, View,Text, FlatList, Dimensions } from 'react-native';
import DividerHorizontal from '../design/DividerHorizontal';
import CloseButton from './TopEndIconButton';

import Icons from '../../assets/constants/Icons';
import Colors from '../../assets/constants/Colors';

import Traslation, { Keys } from '../../translation/TranslationHelper';

export const RIGHT = "Right";
export const LEFT = "Left";
export const UP = "Up";
export const DOWN = "Down";

class OptionsModalButton extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			isVisible: false,
		}		
	}

	changeVisibility = (newVisibility) => {
		this.setState({
			isVisible: newVisibility
		})
	}

	setIcon = () => {
		switch(this.props.direction){
			case RIGHT:
				return this.props.dark ? Icons.right_gray : Icons.right;
			case LEFT:
				return this.props.dark ? Icons.left_gray : Icons.left;
			case UP:
				return this.props.dark ? Icons.up_gray : Icons.up;
			case DOWN:
				return this.props.dark ? Icons.down_gray : Icons.down;
			default:
				return this.props.dark ? Icons.down_gray : Icons.down;
		}
	}

	handleBackButton = () => {
		this.setState({
			isVisible: false
		})
	}

	renderItem = (item, index) => {
		return (
			<TouchableOpacity
				style= { styles.item }
				onPress = { () => {
					this.setState({isVisible: false});
					this.props.onChange(item, index);
				} }>
				<Text style = {styles.itemText} >{ item }</Text>
			</TouchableOpacity>
		); 
	}

	render(){
		const icon = this.setIcon();
		const textColor = this.props.dark ? "#000" : "#fff";
		const fontSize = this.props.small ? 16 : 20;

		return (
			<>
				<Modal
					animationType = "fade"
					transparent = { true }
					visible = { this.state.isVisible }
					onRequestClose= {()=>{
							this.setState({isVisible: false})
						}}>
					
						<View 
							style = {styles.modalBackgroud}>
							<View style = { styles.listContainer }>
								<CloseButton
									src = {Icons.close}
									onPress = {this.handleBackButton}
								/>
								<Text style = {styles.titleText} > { Traslation.getStringValue(Keys.choose_modal_title_text) } </Text>

								<DividerHorizontal/>

								<FlatList
									style = {{ width: "100%" }} 
									contentContainerStyle = {{ alignItems:"stretch", justifyContent: "center", flexGrow:1 }}
									data = { this.props.items }
									keyExtractor = { item => `${item}` }
									renderItem = {({item, index}) => { return this.renderItem(item, index) } }/>
							</View>
						</View>
				</Modal>

				<TouchableOpacity 
					onPress = {() => {
						if(this.props.items && this.props.items.length > 0){
							this.setState({isVisible: true})
						}  
					}}
					style = { styles.renderedContainer }>
					
					{ 
						this.props.withoutText ||
						<Text style = {{...styles.rederedText, color: textColor, fontSize: fontSize}}> { this.props.value } </Text>
					}

					<Image style = {styles.rederedIcon} source = { icon } />
				</TouchableOpacity>
			</>
		);
	}
}

const styles = StyleSheet.create({
	modalBackgroud:{
		flex: 1,
		width:"100%",

		justifyContent:"center",
		alignItems:"center",

		backgroundColor: Colors.shadowBg,

	},		
	listContainer:{
		minHeight: "30%",
		maxHeight: "70%",
		width:"80%",

		marginVertical: 32,
		paddingHorizontal: 8,
		paddingVertical: 16,

		justifyContent: "flex-start",
		alignItems:"center",

		backgroundColor: "#fff",
		borderBottomEndRadius:15,
		borderTopStartRadius:15,

	},
	item:{
		width:"100%",
		padding: 8,

		alignItems:"center",
		justifyContent:"center",
	},
	renderedContainer:{
		//width:"100%",
		flex:1,

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	rederedIcon:{
		width: 16,
		height:16,
		marginEnd:4, 
		resizeMode:"cover"
	},
	titleText:{
		padding:8,

		fontFamily: "roboto-bold",
		fontSize: 20,
		color: Colors.ModalTitleColor,
	},
	itemText:{
		fontFamily: "roboto",
		fontSize: 18,
		color: Colors.ModalTextColor,
		textAlign: "center",
		textAlignVertical: "center",
	},
	rederedText:{
		marginEnd:8,
		marginStart: 4,

		fontFamily: "roboto",
		textAlign: "center",
		textAlignVertical:"center",
	},
});

export default OptionsModalButton;