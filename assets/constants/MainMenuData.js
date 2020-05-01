import Colors from './Colors';
import Icons from './Icons';

import Translation, { Keys } from '../../translation/TranslationHelper';

export default [
	{
		title: () => Translation.getStringValue(Keys.goals_title_text),
		color: Colors.lightBlue500,
		src: Icons.goalsIcon,
		info: () => Translation.getStringValue(Keys.goals_info_text),
		isSourceBg: false,
		redirect: {
			route: 'Goals',
			params: {
				title: () => Translation.getStringValue(Keys.goals_title_text),
				options: [ Keys.income_op1, Keys.income_op2, Keys.income_op3, Keys.income_op4, Keys.income_op5, Keys.income_op6, Keys.income_op7 ]
			}
		}
	},

	{
		title: () => Translation.getStringValue(Keys.results_title_text),
		color: Colors.lightBlue700,
		src: Icons.resultsIcon,
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
		src: Icons.mainPhoto,
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
		src: Icons.budgetIcon,
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
		src: Icons.statsIcon,
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
		src: Icons.aboutIcon,
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