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