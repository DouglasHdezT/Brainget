import { createStore, combineReducers, applyMiddleware } from 'redux';
import BudgetReducer from './reducers/BudgetReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	budget: BudgetReducer,
});

const mainStore = createStore(rootReducer, applyMiddleware(thunk));

export default mainStore;