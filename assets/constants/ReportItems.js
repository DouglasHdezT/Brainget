/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
