import React from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx'
import AutoRunApp from './AutoRunApp'
import App from './App'
import ReactApp from './ReactApp'

window.observable = observable
window.addEventListener('load', () => new AutoRunApp())

// ReactDOM.render(
//     <ReactApp />,
//   document.getElementById('root')
// );
