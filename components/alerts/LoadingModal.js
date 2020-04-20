import React, { Component } from 'react';

import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators'
import Colors from '../../assets/constants/Colors';

class LoadingModal extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Modal
				animationType = "fade"
				transparent = { true }
				visible = { this.props.visible } >

				<View style = { styles.modalBg }>
					<PacmanIndicator
						size = { 80 }
						color = { Colors.lightBlue500 }
						animating = { this.props.visible }
					/>
				</View>

			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	modalBg: {
		flex: 1,
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: Colors.shadowBg
	}
});

export default LoadingModal;