import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

class CostsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'Cost Screen'),
		};
	};
	
	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style = {{flex:1, justifyContent:"center", alignItems:"center"}}>
				<Text>{this.props.navigation.getParam('TAG')}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default CostsScreen;