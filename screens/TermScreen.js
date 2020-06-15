import React from 'react';

import { StyleSheet, View, Button } from 'react-native';

const TermScreen = ({onPress}) => {
	return(
		<View style = { styles.container }>
			<Button title = "Aceptar" onPress = { onPress } />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",	
	}
});

export default TermScreen;