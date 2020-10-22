/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
		Translation.getStringValue(Keys.number_misstype_alert_text),
		[{ 
			text: Translation.getStringValue(Keys.ok_action_alert_text), 
			onPress: () => {},
			style: "default"
		}]
	);
}