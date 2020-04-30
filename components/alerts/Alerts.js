import { Alert } from "react-native";
import { BackHandler } from 'react-native';

import Translation, { Keys } from '../../translation/TranslationHelper';

export const dropConfimation = action => {
	Alert.alert(
		Translation.getStringValue(Keys.confirmation_alert_title),
		Translation.getStringValue(Keys.confirmation_alert_text),
		[
			{
				text: Translation.getStringValue(Keys.accept_action_alert_text),
				onPress: action,
				style: "default"
			},
			{
				text: Translation.getStringValue(Keys.deny_action_alert_text),
				onPress: () => {},
				style: "cancel"
			}
		],
		{
			onDismiss: () => {  }
		}
	);
}

export const periodsSettings = () =>{
	return new Promise((resolve, reject) => {
		Alert.alert(
			Translation.getStringValue(Keys.configuration_alert_title),
			Translation.getStringValue(Keys.configuration_alert_text),
			[
				{
					text: Translation.getStringValue(Keys.configuration_biweekly_action_text),
					onPress: () => { resolve("2") },
					style: "default"
				},
				{
					text: Translation.getStringValue(Keys.configuration_monthly_action_text),
					onPress: () => { resolve("1") },
					style: "default"
				}
			],
			{
				onDismiss: () => { resolve("1") }
			}
		);
	});
}

export const errorWarning = () => {
	Alert.alert(
		Translation.getStringValue(Keys.error_alert_title),
		Translation.getStringValue(Keys.error_alert_text),
		[
			{
				text: Translation.getStringValue(Keys.ok_action_alert_text),
				onPress: () => { BackHandler.exitApp() },
				style: "default"
			}
		],
		{
			cancelable: true,
			onDismiss: () => { BackHandler.exitApp() }
		}
	);
}

export const emptyFieldsAlert = () => {
	Alert.alert(
		Translation.getStringValue(Keys.empty_fields_alert_title),
		Translation.getStringValue(Keys.empty_fields_alert_text),
		[{ 
			text: Translation.getStringValue(Keys.ok_action_alert_text), 
			onPress: () => {},
			style: "default"
		}]
	);
}

export const misstypeFields = () => {
	Alert.alert(
		Translation.getStringValue(Keys.number_misstype_alert_title),
		undefined,
		[{ 
			text: Translation.getStringValue(Keys.ok_action_alert_text), 
			onPress: () => {},
			style: "default"
		}]
	);
}