

/**
* Todo hanlders
**/

const API = {};
module.exports = API;

// Dummy Todo
let todos = [{
  id: 0,
  text: 'initial'
}];

let id = 1;

const getNewId = () => id++;

//  Todo Handlers
API.getTodos = (req, h) => {
  return todos;
}

API.addTodos = (req, h) => {
  let payload = req.payload.newToDo;
  todos.push({
    id: getNewId(),
    text: payload
  });
  return todos;
}

API.updateTodos = (req) => {
  todos = todos.map((item) => {
    if (item.id == req.params.ID) {
      item.text = req.payload.newToDo;
    }
    return item;
  });

  return todos;
}

API.deleteTodos = (req) => {
  todos = todos.filter((item) => {
    return item.id != req.params.ID;
  })
  return todos;
}
