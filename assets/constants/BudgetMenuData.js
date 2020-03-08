import Colors from './Colors'
import Expenses from './ExpensesTags';

export default  [
    {
      title: 'Gastos Fíjos',
      color: Colors.cyan500,
	  src: require('../img/gastos_fijos.png'), 
	  info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
	  isSourceBg: false,
	  redirect: {
		  route: 'Costs',
		  params : {
			  title: 'Gastos Fijos',
			  TAG : Expenses.Fixed,
			  canRepeatElems : false
		  }
	  }
    },
  
    {
      title: 'Gastos Opcionales',
      color: Colors.cyan700,
	  src: require('../img/gastos_opcionales.png'),
	  info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
	  isSourceBg: false,
	  redirect: {
		route: 'Costs',
		params : {
			title: 'Gastos Opcionales',
			TAG : Expenses.Optional,
			canRepeatElems : true
		}
	}
    },
  
    {
      title: 'Gastos en Salud',
      color: Colors.cyan900,
	  src: require('../img/gastos_salud.png'),
	  info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
	  isSourceBg: false,
	  redirect: {
		route: 'Costs',
		params : {
			title: 'Gastos en Salud',
			TAG : Expenses.Health,
			canRepeatElems : true
		}
	}
    },
  
    {
      title: 'Gastos Variables',
      color: Colors.teal500,
	  src: require('../img/gastos_variables.png'),
	  info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
	  isSourceBg: false,
	  redirect: {
		route: 'Costs',
		params : {
			title: 'Gastos Variables',
			TAG : Expenses.Variable,
			canRepeatElems : true
		}
	}
    },
  
    {
      title: 'Imprevistos',
      color: Colors.teal700,
	  src: require('../img/imprevistos.png'),
	  info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
	  isSourceBg: false,
	  redirect: {
		route: 'Costs',
		params : {
			title: 'Imprevistos',
			TAG : Expenses.Unexpected,
			canRepeatElems : true
		}
	}
    },
  
    {
      title: 'Ahorros | Ofrendas',
      color: Colors.teal900,
	  src: require('../img/ahorros_ofrendas.png'),
	  info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor laboriosam quia dignissimos. Rem eum libero voluptates excepturi! Ab animi voluptate fugit quasi veniam ipsam? Reiciendis alias et ad quisquam fugiat.',
	  isSourceBg: false,
	  redirect: {
		route: 'Costs',
		params : {
			title: 'Ahorros | Ofrendas',
			TAG : Expenses.Aid,
			canRepeatElems : true
		}
	}
    },
]