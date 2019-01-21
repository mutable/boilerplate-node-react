import React, { Component } from 'react';
import Content from './content.jsx';

const API_URL = '/api/todos/';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.fetchTodos();
  }

  fetchTodos = () => fetch(API_URL)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        todos: data,
      });
    })
    .catch();

  render() {
    return (
      <div>
        <Content
          fetchTodos={this.fetchTodos}
          todos={this.state.todos}
        />
      </div>
    );
  }
}
