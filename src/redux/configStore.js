import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authenticationReducer, childReducer } from './reducers/index.reducer';
const rootReducer = combineReducers({
	auth: authenticationReducer,
	childs: childReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
