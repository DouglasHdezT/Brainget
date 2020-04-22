import Colors from './Colors'
import Expenses from './ExpensesTags';

import Translation, { Keys } from '../../translation/TranslationHelper';

export default [
	{
		title: () => Translation.getStringValue(Keys.fixed_costs_title_text),
		color: Colors.cyan500,
		src: require('../img/gastos_fijos.png'),
		info: () => Translation.getStringValue(Keys.fixed_costs_info_text),
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: () => Translation.getStringValue(Keys.fixed_costs_title_text),
				TAG: Expenses.Fixed,
				canRepeatElems: false
			}
		}
	},

	{
		title: () => Translation.getStringValue(Keys.optional_costs_title_text),
		color: Colors.cyan700,
		src: require('../img/gastos_opcionales.png'),
		info: () => Translation.getStringValue(Keys.optional_costs_info_text),
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: () => Translation.getStringValue(Keys.optional_costs_title_text),
				TAG: Expenses.Optional,
				canRepeatElems: true
			}
		}
	},

	{
		title: () => Translation.getStringValue(Keys.health_costs_title_text),
		color: Colors.cyan900,
		src: require('../img/gastos_salud.png'),
		info: () => Translation.getStringValue(Keys.health_costs_info_text),
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: () => Translation.getStringValue(Keys.health_costs_title_text),
				TAG: Expenses.Health,
				canRepeatElems: true
			}
		}
	},

	{
		title: () => Translation.getStringValue(Keys.variable_costs_title_text),
		color: Colors.teal500,
		src: require('../img/gastos_variables.png'),
		info: () => Translation.getStringValue(Keys.variable_costs_info_text),
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: () => Translation.getStringValue(Keys.variable_costs_title_text),
				TAG: Expenses.Variable,
				canRepeatElems: true
			}
		}
	},

	{
		title: () => Translation.getStringValue(Keys.unexpected_costs_title_text),
		color: Colors.teal700,
		src: require('../img/imprevistos.png'),
		info: () => Translation.getStringValue(Keys.unexpected_costs_info_text),
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: () => Translation.getStringValue(Keys.unexpected_costs_title_text),
				TAG: Expenses.Unexpected,
				canRepeatElems: true
			}
		}
	},

	{
		title: () => Translation.getStringValue(Keys.aid_costs_title_text),
		color: Colors.teal900,
		src: require('../img/ahorros_ofrendas.png'),
		info: () => Translation.getStringValue(Keys.aid_costs_info_text),
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: () => Translation.getStringValue(Keys.aid_costs_title_text),
				TAG: Expenses.Aid,
				canRepeatElems: true
			}
		}
	},
]