import { Alert } from "react-native"

export const dropConfimation = action => {
	Alert.alert(
		"¿Estás seguro?",
		'Esta información se perderá definitivamente',
		[
			{
				text: 'Si',
				onPress: action,
				style: 'cancel'
			},
			{
				text: 'No',
				onPress: () => {},
				style: 'default'
			}
		],
		{
			cancelable: true
		}
	);
}