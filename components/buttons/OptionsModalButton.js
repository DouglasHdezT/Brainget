import React, { Component } from 'react';

import { StyleSheet, TouchableOpacity ,Modal, Image, View,Text, FlatList, Dimensions } from 'react-native';
import DividerHorizontal from '../design/DividerHorizontal';
import CloseButton from './TopEndIconButton';

import Icons from '../../assets/constants/Icons';
import Colors from '../../assets/constants/Colors';

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
								<Text style = {styles.titleText} > Elige </Text>

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
					onPress = {() => { this.setState({isVisible: true}) }}
					style = { styles.renderedContainer }>
					<Text style = {{...styles.rederedText, color: textColor, fontSize: fontSize}}> { this.props.value } </Text>
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
		height: (Math.round(Dimensions.get('window').height) / 3) * 1.5,
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
		width:"100%",
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
		color: Colors.ModalTextColor
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