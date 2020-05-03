import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

class AboutOptionScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'About Screen'),
		};
	};

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style = {{alignItems:"center", justifyContent:"center"}}>
				<Text>AboutOptionScreen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default AboutOptionScreen;