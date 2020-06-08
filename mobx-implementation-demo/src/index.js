import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import User from './store/user';

const user = new User()
ReactDOM.render(
    <App store={user}/>,
  document.getElementById('root')
);
