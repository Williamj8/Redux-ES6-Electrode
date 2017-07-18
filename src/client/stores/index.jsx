import { applyMiddleware, compose, createStore } from 'redux';
import reducer from '../reducers/index';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

var finalCreateStore = compose(
  applyMiddleware(thunk, createLogger())
)(createStore);

var configureStore = function(initialState) {
  initialState = initialState || {todos: []}
  return finalCreateStore(reducer, initialState);
};

module.exports = configureStore;
