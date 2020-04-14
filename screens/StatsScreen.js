import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

class StatsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'Stats Screen'),
		};
	};

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style = {{alignItems:"center", justifyContent:"center"}}>
				<Text>StatsScreen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default StatsScreen;