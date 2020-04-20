import ExpensesTags from "./ExpensesTags";


export const INCOME_TYPE = "Income";
export const COST_TYPE = "Cost";

export default [
	{
		title: "Ingresos",
		type: INCOME_TYPE,
		TAG : ""
	},
	{
		title: "Gastos Fijos",
		type: COST_TYPE,
		TAG : ExpensesTags.Fixed
	},
	{
		title: "Gastos Variables",
		type: COST_TYPE,
		TAG : ExpensesTags.Variable
	},
	{
		title: "Gastos Opcionales",
		type: COST_TYPE,
		TAG : ExpensesTags.Optional
	},
	{
		title: "Imprevistos",
		type: COST_TYPE,
		TAG : ExpensesTags.Unexpected
	},
	{
		title: "Gastos en Salud",
		type: COST_TYPE,
		TAG : ExpensesTags.Health
	},
	{
		title: "Diezmos | Ofrendas",
		type: COST_TYPE,
		TAG : ExpensesTags.Aid
	},
]
