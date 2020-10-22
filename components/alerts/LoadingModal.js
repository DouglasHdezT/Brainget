/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { Component } from 'react';

import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native';
import { BarIndicator } from 'react-native-indicators'
import Colors from '../../assets/constants/Colors';

class LoadingModal extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<View style = { styles.modalBg }>
				<BarIndicator
					count = { 5 }
					size = { 60 }
					color = { Colors.lightBlue500 }
					animating = { this.props.visible }
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	modalBg: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: Colors.shadowBg
	}
});

export default LoadingModal;