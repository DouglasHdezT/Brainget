import { createStore, combineReducers } from 'redux';
import BudgetReducer from './reducers/BudgetReducer'

const rootReducer = combineReducers({
	budget: BudgetReducer,
});

const mainStore = createStore(rootReducer);

export default mainStore;