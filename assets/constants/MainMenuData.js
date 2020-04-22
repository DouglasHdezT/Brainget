import Colors from './Colors'
import Translation, { Keys } from '../../translation/TranslationHelper'

export default [
	{
		title: () => Translation.getStringValue(Keys.goals_title_text),
		color: Colors.lightBlue500,
		src: require('../img/metas_financieras.png'),
		info: () => Translation.getStringValue(Keys.goals_info_text),
		isSourceBg: false,
		redirect: {
			route: 'Goals',
			params: {
				title: () => Translation.getStringValue(Keys.goals_title_text),
			}
		}
	},

	{
		title: () => Translation.getStringValue(Keys.results_title_text),
		color: Colors.lightBlue700,
		src: require('../img/resultados.png'),
		info: () => Translation.getStringValue(Keys.results_info_text),
		isSourceBg: false,
		redirect: {
			route: 'Results',
			params: {
				title: () => Translation.getStringValue(Keys.results_title_text)
			}
		}
	},

	{
		title: () => Translation.getStringValue(Keys.services_title_text),
		color: Colors.lightBlue900,
		src: require('../img/main_photo.jpeg'),
		info: () => Translation.getStringValue(Keys.services_info_text),
		isSourceBg: true,
		redirect: {
			route: 'Services',
			params: {
				title: () => Translation.getStringValue(Keys.services_title_text)
			}
		}
	},

	{
		title: () => Translation.getStringValue(Keys.budget_title_text),
		color: Colors.blue500,
		src: require('../img/presupuesto.png'),
		info: () => Translation.getStringValue(Keys.budget_info_text),
		isSourceBg: false,
		redirect: {
			route: 'BudgetMenu',
			params: {
				title: () => Translation.getStringValue(Keys.budget_title_text)
			}
		}
	},

	{
		title: () => Translation.getStringValue(Keys.stats_title_text),
		color: Colors.blue700,
		src: require('../img/estadisticas.png'),
		info: () => Translation.getStringValue(Keys.stats_info_text),
		isSourceBg: false,
		redirect: {
			route: 'Stats',
			params: {
				title: () => Translation.getStringValue(Keys.stats_title_text)
			}
		}
	},

	{
		title: () => Translation.getStringValue(Keys.about_title_text),
		color: Colors.blue900,
		src: require('../img/acerca_de.png'),
		info: () => Translation.getStringValue(Keys.about_info_text),
		isSourceBg: false,
		redirect: {
			route: 'About',
			params: {
				title: () => Translation.getStringValue(Keys.about_title_text)
			}
		}
	},
]