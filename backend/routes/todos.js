
/**
* Todo API route
**/

const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');

const ApiTodo = require('../api/todo');
const JoiModels = require('../utils/joi-models');

const routes = [];
module.exports = routes;

const FAIL_ACTION = async (request, h, err) => Boom.badRequest(err.details[0].message);

// Todo Request
routes.push({
  method: 'GET',
  path: '/todos',
  options: {
    auth: false,
    description: 'Todo get request',
    tags: ['api'],
    handler: ApiTodo.getTodos,  
    response: {
      schema: Joi.array().items(Object.assign({}, JoiModels.LIST_TODOS)),
      failAction: FAIL_ACTION
    }
  }
});

routes.push({
  method: 'POST',
  path: '/todos',
  options: {
    auth: false,
    description: 'Todo get request',
    tags: ['api'],
    handler: ApiTodo.addTodos,  
    validate: {
      query: Object.assign({}, JoiModels.ADD_TODOS),
    },
    response: {
      schema: Joi.array().items(Object.assign({}, JoiModels.LIST_TODOS)),
      failAction: FAIL_ACTION
    }
  }
});

routes.push({
  method: 'PUT',
  path: '/todos/{id}',
  options: {
    auth: false,
    description: 'Todo get request',
    tags: ['api'],
    handler: ApiTodo.updateTodos,
    response: {
      schema: Joi.array().items(Object.assign({}, JoiModels.LIST_TODOS)),
      failAction: FAIL_ACTION
    }
  }
});

routes.push({
  method: 'DELETE',
  path: '/todos/{id}',
  options: {
    auth: false,
    description: 'Todo get request',
    tags: ['api'],
    handler: ApiTodo.deleteTodos,  
    response: {
      schema: Joi.array().items(Object.assign({}, JoiModels.LIST_TODOS)),
      failAction: FAIL_ACTION
    }
  }
});
