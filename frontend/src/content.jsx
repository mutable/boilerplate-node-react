import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list.jsx';

const API_URL = '/api/todos/';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddActive: true,
      editId: '',
      value: ''
    };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  setTextfield = (value) => {
    this.setState({ value });
  }

  add = () => fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ newToDo: this.state.value }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(() => {
    this.props.fetchTodos();
    this.setState({ value: '' });
  })
  .catch()

  update = () => fetch(API_URL + this.state.editId, {
    method: 'PUT',
    body: JSON.stringify({ newToDo: this.state.value }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(() => {
    this.props.fetchTodos();
    this.setState({ isAddActive: true, value: '' });
  })
  .catch()

  editing = () => {
    this.setState({
      isAddActive: false
    });
  }

  storeEditId = (id) => {
    this.setState({
      editId: id
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>
            Add new todo
          </h2>

          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange}
          />

          <button
            onClick={this.add}
            style={{ display: this.state.isAddActive ? 'inline' : 'none' }}
            disabled={!this.state.value}
          >
            Add
          </button>

          <button
            onClick={this.update}
            style={{ display: this.state.isAddActive ? 'none' : 'inline' }}
            disabled={!this.state.value}
          >
            Save
          </button>
        </div>

        <h2>
          To-do list
        </h2>
        <List
          todos={this.props.todos}
          fetchTodos={this.props.fetchTodos}
          editing={this.editing}
          storeEditId={this.storeEditId}
          setTextfield={this.setTextfield}
        />
      </div>
    );
  }
}

Content.propTypes = {
  todos: PropTypes.array.isRequired,
  fetchTodos: PropTypes.func.isRequired
};
