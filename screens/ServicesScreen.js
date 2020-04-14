import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

class ServicesScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'Services Screen'),
		};
	};

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style = {{alignItems:"center", justifyContent:"center"}}>
				<Text>ServicesScreen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default ServicesScreen;