import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import ReducerAction from './reducers/ReducerAction';
const Store = createStore(
ReducerAction,
{
    getId : null,
    
}
);

ReactDOM.render(
<Provider store={Store}>
<App />
</Provider>

,document.getElementById('root'));
