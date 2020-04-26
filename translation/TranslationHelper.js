import i18n from 'i18n-js';

import en_traslation from './strings/en';
import es_traslation from './strings/es';

const EN_LANG = "en";
const ES_LANG = "es";

class TranslationHelper {

	constructor() {
		this.language = "en";

		i18n.translations = {
			en: en_traslation,
			es: es_traslation,
		}

		i18n.locale = this.language;
		i18n.defaultLocale = "en";
		i18n.fallbacks = true;
	}

	setLanguage = (language) => {
		const languageRef = language === undefined ? this.language : language.substring(0, 2);

		if (languageRef !== this.language) {
			switch (languageRef) {
				case EN_LANG:
				case ES_LANG:
					this.language = languageRef;
					i18n.locale = this.language;
					break;
			}
		}
		console.log(this.language);
	}

	getStringValue = (key) => {
		return i18n.t(key);
	}
}

export default new TranslationHelper();

export const Keys = {
	test: 'test',
	app_title_text: 'app_title_text',
	goals_title_text: 'goals_title_text',
	goals_info_text: 'goals_info_text',
	budget_title_text: 'budget_title_text',
	budget_info_text: 'budget_info_text',
	results_title_text: 'results_title_text',
	results_info_text: 'results_info_text',
	stats_title_text: 'stats_title_text',
	stats_info_text: 'stats_info_text',
	services_title_text: 'services_title_text',
	services_info_text: 'services_info_text',
	about_title_text: 'about_title_text',
	about_info_text: 'about_info_text',
	fixed_costs_title_text: 'fixed_costs_title_text',
	fixed_costs_info_text: 'fixed_costs_info_text',
	variable_costs_title_text: 'variable_costs_title_text',
	variable_costs_info_text: 'variable_costs_info_text',
	optional_costs_title_text: 'optional_costs_title_text',
	optional_costs_info_text: 'optional_costs_info_text',
	unexpected_costs_title_text: 'unexpected_costs_title_text',
	unexpected_costs_info_text: 'unexpected_costs_info_text',
	health_costs_title_text: 'health_costs_title_text',
	health_costs_info_text: 'health_costs_info_text',
	aid_costs_title_text: 'aid_costs_title_text',
	aid_costs_info_text: 'aid_costs_info_text',
	january_month_text: 'january_month_text',
	february_month_text: 'february_month_text',
	march_month_text: 'march_month_text',
	april_month_text: 'april_month_text',
	june_month_text: 'june_month_text',
	july_month_text: 'july_month_text',
	august_month_text: 'august_month_text',
	september_month_text: 'september_month_text',
	october_month_text: 'october_month_text',
	november_month_text: 'november_month_text',
	december_month_text: 'december_month_text',
	goals_screen_section_1_title: 'goals_screen_section_1_title',
	goals_screen_section_2_q1: 'goals_screen_section_2_q1',
	goals_screen_section_2_q2: 'goals_screen_section_2_q2',
	goals_screen_section_2_q3: 'goals_screen_section_2_q3',
	period_prefix_text: 'period_prefix_text',
	budget_result_title: 'budget_result_title',
	incomes_result_text: 'incomes_result_text',
	costs_result_text: 'costs_result_text',
	balance_result_text: 'balance_result_text',
	checkout_result_action_text: 'checkout_result_action_text',
	from_prefix_text: 'from_prefix_text',
	to_prefix_text: 'to_prefix_text',
	report_result_title: 'report_result_title',
	submit_action_text: 'submit_action_text',
	previous_action_text: 'previous_action_text',
	next_action_text: 'next_action_text',
	period_prefix_footer_text: 'period_prefix_footer_text',
	add_cost_action_text: 'add_cost_action_text',
	add_income_action_text: 'add_income_action_text',
	add_action_text: 'add_action_text',
	delete_action_text: 'delete_action_text',
	update_action_text: 'update_action_text',
	income_modal_title_text: 'income_modal_title_text',
	cost_modal_title_text: 'cost_modal_title_text',
	name_modal_field_text: 'name_modal_field_text',
	amount_modal_field_text: 'amount_modal_field_text',
	percentage_modal_field_text: 'percentage_modal_field_text',
	cash_modal_field_text: 'cash_modal_field_text',
	choose_modal_title_text: 'choose_modal_title_text',
	empty_fields_alert_title: 'empty_fields_alert_title',
	empty_fields_alert_text: 'empty_fields_alert_text',
	ok_action_alert_text: 'ok_action_alert_text',
	number_misstype_alert_title: 'number_misstype_alert_title',
	number_misstype_alert_text: 'number_misstype_alert_text',
	accept_action_alert_text: 'accept_action_alert_text',
	deny_action_alert_text: 'deny_action_alert_text',
	confirmation_alert_title: 'confirmation_alert_title',
	confirmation_alert_text: 'confirmation_alert_text',
	configuration_alert_title: 'configuration_alert_title',
	configuration_alert_text: 'configuration_alert_text',
	configuration_biweekly_action_text: 'configuration_biweekly_action_text',
	configuration_monthly_action_text: 'configuration_monthly_action_text',
	error_alert_title: 'error_alert_title',
	error_alert_text: 'error_alert_text',
	report_screen_title: "report_screen_title",
	may_month_text: "may_month_text",
	fixed_op1: 'fixed_op1',
	fixed_op2: 'fixed_op2',
	fixed_op3: 'fixed_op3',
	fixed_op4: 'fixed_op4',
	fixed_op5: 'fixed_op5',
	fixed_op6: 'fixed_op6',
	fixed_op7: 'fixed_op7',
	fixed_op8: 'fixed_op8',
	fixed_op9: 'fixed_op9',
	fixed_op10: 'fixed_op10',
	fixed_op11: 'fixed_op11',
	fixed_op12: 'fixed_op12',
	fixed_op13: 'fixed_op13',
	fixed_op14: 'fixed_op14',
	fixed_op15: 'fixed_op15',
	fixed_op16: 'fixed_op16',
	fixed_op17: 'fixed_op17',
	unexpected_op1: 'unexpected_op1',
	unexpected_op2: 'unexpected_op2',
	unexpected_op3: 'unexpected_op3',
	unexpected_op4: 'unexpected_op4',
	unexpected_op5: 'unexpected_op5',
	variable_op1: 'variable_op1',
	variable_op2: 'variable_op2',
	variable_op3: 'variable_op3',
	variable_op4: 'variable_op4',
	variable_op5: 'variable_op5',
	variable_op6: 'variable_op6',
	variable_op7: 'variable_op7',
	variable_op8: 'variable_op8',
	variable_op9: 'variable_op9',
	variable_op10: 'variable_op10',
	variable_op11: 'variable_op11',
	variable_op12: 'variable_op12',
	variable_op13: 'variable_op13',
	variable_op14: 'variable_op14',
	variable_op15: 'variable_op15',
	variable_op16: 'variable_op16',
	variable_op17: 'variable_op17',
	variable_op18: 'variable_op18',
	variable_op19: 'variable_op19',
	variable_op20: 'variable_op20',
	variable_op21: 'variable_op21',
	optional_op1: 'optional_op1',
	optional_op2: 'optional_op2',
	optional_op3: 'optional_op3',
	optional_op4: 'optional_op4',
	optional_op5: 'optional_op5',
	optional_op6: 'optional_op6',
	optional_op7: 'optional_op7',
	optional_op8: 'optional_op8',
	optional_op9: 'optional_op9',
	optional_op10: 'optional_op10',
	optional_op11: 'optional_op11',
	optional_op12: 'optional_op12',
	optional_op13: 'optional_op13',
	optional_op14: 'optional_op14',
	optional_op15: 'optional_op15',
	health_op1: 'health_op1',
	health_op2: 'health_op2',
	health_op3: 'health_op3',
	health_op4: 'health_op4',
	health_op5: 'health_op5',
	aid_op1: 'aid_op1',
	aid_op2: 'aid_op2',
	aid_op3: 'aid_op3',
	aid_op4: 'aid_op4',
	income_op1: 'income_op1',
	income_op2: 'income_op2',
	income_op3: 'income_op3',
	income_op4: 'income_op4',
	income_op5: 'income_op5',
	income_op6: 'income_op6',
	income_op7: 'income_op7',
}