// Necessities and accessories for constructing our Redux store;
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Individual reducers altogether under an alias;
// import * as reducers from '../reducers';
import {reducer as formReducer} from "redux-form" 
import reducer from 'redux-form/lib/reducer';
import foodReducer from "../store/utilities/food"
// Construct our Redux store;
const rootReducer = combineReducers({
    form : formReducer,
    food : foodReducer
});
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const store = createStore(rootReducer, middleware);

// Export our store by default, which will be provided to and injected within our entire application;
export default store;