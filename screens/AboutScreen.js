import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

class AboutScreen extends Component {
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
				<Text>AboutScreen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default AboutScreen;