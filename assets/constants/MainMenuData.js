import Colors from './Colors';
import Icons from './Icons';

import Translation, { Keys } from '../../translation/TranslationHelper';

export default [
	{
		title: Keys.goals_title_text,
		color: Colors.lightBlue500,
		src: Icons.goalsIcon,
		info: Keys.goals_info_text,
		isSourceBg: false,
		redirect: {
			route: 'Goals',
			params: {
				title: Keys.goals_title_text,
				options: [ Keys.income_op1, Keys.income_op2, Keys.income_op3, Keys.income_op4, Keys.income_op5, Keys.income_op6, Keys.income_op7 ]
			}
		}
	},

	{
		title: Keys.results_title_text,
		color: Colors.lightBlue700,
		src: Icons.resultsIcon,
		info: Keys.results_info_text,
		isSourceBg: false,
		redirect: {
			route: 'Results',
			params: {
				title: Keys.results_title_text
			}
		}
	},

	{
		title: Keys.services_title_text,
		color: Colors.lightBlue900,
		src: Icons.mainPhoto,
		info: Keys.services_info_text,
		isSourceBg: true,
		redirect: {
			route: 'Services',
			params: {
				title: Keys.services_title_text
			}
		}
	},

	{
		title: Keys.budget_title_text,
		color: Colors.blue500,
		src: Icons.budgetIcon,
		info: Keys.budget_info_text,
		isSourceBg: false,
		redirect: {
			route: 'BudgetMenu',
			params: {
				title: Keys.budget_title_text
			}
		}
	},

	{
		title: Keys.stats_title_text,
		color: Colors.blue700,
		src: Icons.statsIcon,
		info: Keys.stats_info_text,
		isSourceBg: false,
		redirect: {
			route: 'Stats',
			params: {
				title: Keys.stats_title_text
			}
		}
	},

	{
		title: Keys.about_title_text,
		color: Colors.blue900,
		src: Icons.aboutIcon,
		info: Keys.about_info_text,
		isSourceBg: false,
		redirect: {
			route: 'About',
			params: {
				title: Keys.about_title_text
			}
		}
	},
]