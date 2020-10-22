/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React, { Component } from 'react';

import { StyleSheet, View, Image, } from 'react-native';
import Colors from '../../assets/constants/Colors';
import { errorWarning } from './Alerts';

class LoadingExecModal extends Component {
	constructor(props){
		super(props);

		this._isMounted = false;

		this.state = {
			visible: true
		}
	}

	_execAsync = async () => {
		if(!this.props.onFinish){
			throw new Error("Must provide an finish Callback");
		}
		
		try {
			await this.props.startAsync()

			if(this._isMounted){
				this.setState({visible:false})
				this.props.onFinish()
			}
		}catch (e){
			errorWarning(); 
			throw new Error(`An Error ocurred: ${e}`);
		}
	}

	componentDidMount(){
		this._isMounted = true;
		this._execAsync().catch();
	}

	componentWillUnmount(){
		this._isMounted = false;
	}

	render(){
		return (
			<View style = { styles.modalBg }>
				<Image source = { require('../../assets/splash.png') }  style = {{ resizeMode: "cover", width: "100%", flex: 1 }}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	modalBg: {
		flex: 1,
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: Colors.deepPurple600,
	}
});

export default LoadingExecModal;