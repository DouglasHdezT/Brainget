import ExpensesTags from "./ExpensesTags";
import { Keys } from "../../translation/TranslationHelper";


export const INCOME_TYPE = "Income";
export const COST_TYPE = "Cost";

export default [
	{
		title: Keys.incomes_result_text,
		type: INCOME_TYPE,
		TAG : ""
	},
	{
		title: Keys.fixed_costs_title_text,
		type: COST_TYPE,
		TAG : ExpensesTags.Fixed
	},
	{
		title: Keys.variable_costs_title_text,
		type: COST_TYPE,
		TAG : ExpensesTags.Variable
	},
	{
		title: Keys.optional_costs_title_text,
		type: COST_TYPE,
		TAG : ExpensesTags.Optional
	},
	{
		title: Keys.unexpected_costs_title_text,
		type: COST_TYPE,
		TAG : ExpensesTags.Unexpected
	},
	{
		title: Keys.health_costs_title_text,
		type: COST_TYPE,
		TAG : ExpensesTags.Health
	},
	{
		title: Keys.aid_costs_title_text,
		type: COST_TYPE,
		TAG : ExpensesTags.Aid
	},
]
