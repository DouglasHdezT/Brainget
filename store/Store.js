import { createStore, combineReducers, applyMiddleware } from 'redux';

import BudgetReducer from './reducers/BudgetReducer'
import ConfigReducer from './reducers/ConfigReducer'

const rootReducer = combineReducers({
	budget: BudgetReducer,
	config: ConfigReducer
});

const mainStore = createStore(rootReducer);

export default mainStore;