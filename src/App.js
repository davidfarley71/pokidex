import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { store } from './index'

function App(props) {
  const [task, updateTask] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('this is the task' + task)
    props.addTodo(task)
  }

  const del = (val) => {
    console.log(val)
    props.removeTodo(val)
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input onChange={e => updateTask(e.target.value)} placeholder="add a value"></input>

      </form>
      {props.todoReducer.SearchArray.map((value, index) => {
        const temp =
          <div key={value}>
            <div > {value} </div>
            <button onClick={e =>del(value)}>delete</button>
          </div>
          return temp;
      })}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


const mapStateToProps = state => {
  return store.getState();
};

export const addTodo = content => ({
  type: "add",
  payload: content
});

export const removeTodo = content => ({
  type: "remove",
  payload: content
});


export default connect(
  mapStateToProps,
  { addTodo, removeTodo }
)(App);
