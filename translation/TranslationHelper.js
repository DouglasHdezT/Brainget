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
}