import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import anecdoteReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer.js';
import filterReducer from './reducers/filterReducer';

import thunk from "redux-thunk";

const reducer = combineReducers(
{
  notification: notificationReducer,
  filter: filterReducer,
  anecdotes: anecdoteReducer
}
);


const Store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;