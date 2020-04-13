import { createStore, combineReducers, applyMiddleware } from 'redux';

import BudgetReducer from './reducers/BudgetReducer'
import ConfigReducer from './reducers/ConfigReducer'

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	budget: BudgetReducer,
	config: ConfigReducer
});

const mainStore = createStore(rootReducer, applyMiddleware(thunk));

export default mainStore;