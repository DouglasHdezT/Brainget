/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import Colors from './Colors'
import Expenses from './ExpensesTags';
import Icons from './Icons';

import { Keys } from '../../translation/TranslationHelper';

export default [
	{
		title: Keys.fixed_costs_title_text,
		color: Colors.cyan500,
		src: Icons.fixedCosts,
		info: Keys.fixed_costs_info_text,
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: Keys.fixed_costs_title_text,
				TAG: Expenses.Fixed,
				options: [ Keys.fixed_op1, Keys.fixed_op2, Keys.fixed_op3, Keys.fixed_op4, Keys.fixed_op5, Keys.fixed_op6, Keys.fixed_op7, Keys.fixed_op8, Keys.fixed_op9, Keys.fixed_op10, Keys.fixed_op11, Keys.fixed_op12, Keys.fixed_op13, Keys.fixed_op14, Keys.fixed_op15, Keys.fixed_op16, Keys.fixed_op17 ],
				canRepeatElems: false
			}
		}
	},

	{
		title: Keys.optional_costs_title_text,
		color: Colors.cyan700,
		src: Icons.optionalCosts,
		info: Keys.optional_costs_info_text,
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: Keys.optional_costs_title_text,
				TAG: Expenses.Optional,
				options: [ Keys.optional_op1, Keys.optional_op2, Keys.optional_op3, Keys.optional_op4, Keys.optional_op5, Keys.optional_op6, Keys.optional_op7, Keys.optional_op8, Keys.optional_op9, Keys.optional_op10, Keys.optional_op11, Keys.optional_op12, Keys.optional_op13, Keys.optional_op14, Keys.optional_op15 ],
				canRepeatElems: true
			}
		}
	},

	{
		title: Keys.health_costs_title_text,
		color: Colors.cyan900,
		src: Icons.healthCosts,
		info: Keys.health_costs_info_text,
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: Keys.health_costs_title_text,
				TAG: Expenses.Health,
				options: [ Keys.health_op1, Keys.health_op2, Keys.health_op3, Keys.health_op4, Keys.health_op5 ],
				canRepeatElems: true
			}
		}
	},

	{
		title: Keys.variable_costs_title_text,
		color: Colors.teal500,
		src: Icons.variableCosts,
		info: Keys.variable_costs_info_text,
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: Keys.variable_costs_title_text,
				TAG: Expenses.Variable,
				options: [ Keys.variable_op1, Keys.variable_op2, Keys.variable_op3, Keys.variable_op4, Keys.variable_op5, Keys.variable_op6, Keys.variable_op7, Keys.variable_op8, Keys.variable_op9, Keys.variable_op10, Keys.variable_op11, Keys.variable_op12, Keys.variable_op13, Keys.variable_op14, Keys.variable_op15, Keys.variable_op16, Keys.variable_op17, Keys.variable_op18, Keys.variable_op19, Keys.variable_op20, Keys.variable_op21 ],
				canRepeatElems: true
			}
		}
	},

	{
		title: Keys.unexpected_costs_title_text,
		color: Colors.teal700,
		src: Icons.unexpectedCosts,
		info: Keys.unexpected_costs_info_text,
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: Keys.unexpected_costs_title_text,
				TAG: Expenses.Unexpected,
				options: [ Keys.unexpected_op1, Keys.unexpected_op2, Keys.unexpected_op3, Keys.unexpected_op4, Keys.unexpected_op5 ],
				canRepeatElems: true
			}
		}
	},

	{
		title: Keys.aid_costs_title_text,
		color: Colors.teal900,
		src: Icons.aidCosts,
		info: Keys.aid_costs_info_text,
		isSourceBg: false,
		redirect: {
			route: 'Costs',
			params: {
				title: Keys.aid_costs_title_text,
				TAG: Expenses.Aid,
				options: [ Keys.aid_op1, Keys.aid_op2, Keys.aid_op3, Keys.aid_op4 ],
				canRepeatElems: true
			}
		}
	},
]