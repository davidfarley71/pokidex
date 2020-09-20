import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux'
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import {Reducer} from './redux/reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


export const store = createStore(combineReducers({ Reducer: Reducer }));

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});


const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
