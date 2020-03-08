import Colors from './Colors'

export default [
	{
		title: 'Mis Metas Financieras',
		color: Colors.lightBlue500,
		src: require('../img/metas_financieras.png'),
		info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
		isSourceBg: false,
		redirect: {
			route: 'Goals',
			params: {
				title: 'Mis Metas Financieras'
			}
		}
	},

	{
		title: 'Resultados',
		color: Colors.lightBlue700,
		src: require('../img/resultados.png'),
		info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
		isSourceBg: false,
		redirect: {
			route: 'BudgetMenu',
			params: {
				title: 'Resultados'
			}
		}
	},

	{
		title: 'Mis Servicios Financieros',
		color: Colors.lightBlue900,
		src: require('../img/main_photo.jpeg'),
		info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
		isSourceBg: true,
		redirect: {
			route: 'BudgetMenu',
			params: {
				title: 'Mis Servicios Financieros'
			}
		}
	},

	{
		title: 'Mi Presupuesto',
		color: Colors.blue500,
		src: require('../img/presupuesto.png'),
		info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
		isSourceBg: false,
		redirect: {
			route: 'BudgetMenu',
			params: {
				title: 'Mi Presupuesto'
			}
		}
	},

	{
		title: 'Estadísticas',
		color: Colors.blue700,
		src: require('../img/estadisticas.png'),
		info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
		isSourceBg: false,
		redirect: {
			route: 'BudgetMenu',
			params: {
				title: 'Estadísticas'
			}
		}
	},

	{
		title: 'Acerca de...',
		color: Colors.blue900,
		src: require('../img/acerca_de.png'),
		info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
		isSourceBg: false,
		redirect: {
			route: 'BudgetMenu',
			params: {
				title: 'Acerca de ...'
			}
		}
	},
]