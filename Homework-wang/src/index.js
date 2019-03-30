import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./views/layout/"
import "./assets/css/index.scss"
import { Provider } from 'react-redux';
import Store from './redux/store/';

ReactDOM.render(
<Provider store = {Store}><Main/></Provider>
, document.getElementById('root'));