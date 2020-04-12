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

export const periodsSettings = () =>{
	return new Promise((resolve, reject) => {
		Alert.alert(
			"Configuración básica",
			'¿Cada cuanto harás tu presupuesto?',
			[
				{
					text: "Quincenal",
					onPress: () => { resolve("2") },
					style: "default"
				},
				{
					text: "Mensual",
					onPress: () => { resolve("1") },
					style: "default"
				}
			],
			{
				cancelable: false,
				onDismiss: () => { resolve("1") }
			}
		);
	});
}