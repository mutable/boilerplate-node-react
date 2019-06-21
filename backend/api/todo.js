

/**
* Todo hanlders
**/

const ApiTodo = {};
module.exports = ApiTodo;

// Dummy Todo
let todos = [{
  id: 0,
  text: 'initial'
}];

let id = 1;

const getNewId = () => id++;

//  Todo Handlers
ApiTodo.getTodos = (req, h) => {
  return todos;
}

ApiTodo.addTodos = (req, h) => {
  let payload = req.payload.newToDo;
  todos.push({
    id: getNewId(),
    text: payload
  });
  return todos;
}

ApiTodo.updateTodos = (req) => {
  todos = todos.map((item) => {
    if (item.id == req.params.id) {
      item.text = req.payload.newToDo;
    }
    return item;
  });

  return todos;
}

ApiTodo.deleteTodos = (req) => {
  todos = todos.filter((item) => {
    return item.id != req.params.id;
  })
  return todos;
}
