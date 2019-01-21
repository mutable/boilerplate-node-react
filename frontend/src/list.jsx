import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_URL = '/api/todos/';

export default class List extends Component {
  edit = (text, id) => {
    this.props.setTextfield(text);
    this.props.editing();
    this.props.storeEditId(id);
  }

  delete = id => fetch(API_URL + id, {
    method: 'DELETE',
  })
    .then(this.props.fetchTodos)
    .catch()

  render() {
    return (
      <div>
        <ol>
          {this.props.todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => this.edit(todo.text, todo.id)} >
                Edit
              </button>
              <button onClick={() => this.delete(todo.id)} >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  setTextfield: PropTypes.func.isRequired,
  editing: PropTypes.func.isRequired,
  storeEditId: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
};
