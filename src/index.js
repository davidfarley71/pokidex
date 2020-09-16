import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux'
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';

import App from "./App";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const todoReducer = (state = {
    SearchArray: [],
    reduxHistory: []
}, action) => {
    switch (action.type) {
        case "add":
            state = {
                ...state,
                SearchArray: [...state.SearchArray, action.payload],
                reduxHistory: [...state.reduxHistory, action.payload]
            };
            break;
        case "remove":
            const removeindex = state.SearchArray.indexOf(action.payload)
            let temp = state.SearchArray.splice(removeindex,1)
            
            console.log( state.SearchArray)
            state = {
                ...state,
                SearchArray: state.SearchArray,
                // .map((task, index) => {
                //     console.log(index)
                //     return index === removeindex ? action.payload : task
                // }),
                reduxHistory: [...state.reduxHistory, action.payload]
            };
            break;
    }
    return state;
};


export const store = createStore(combineReducers({ todoReducer }));

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
