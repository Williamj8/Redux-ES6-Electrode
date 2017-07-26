import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';

var todos = (localStorage.getItem('todos')) || [{
    id: 0,
    completed: false,
    text: 'what to do',
    status: 'toggle incompleted'
  }];

var initialState = todos;

localStorage.setItem('todos', JSON.stringify(initialState.todos))

var store =  require('./stores/index')(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);