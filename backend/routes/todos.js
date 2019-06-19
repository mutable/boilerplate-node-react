
/**
* Todo API route
**/
const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');

const API_TODO = require('../api/todo');
const Joi_Models = require('../utils/joiModels');

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
    handler: API_TODO.getTodos,  
    response: {
      schema: Joi.array().items(Object.assign({}, Joi_Models.LIST_TODOS)),
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
    handler: API_TODO.addTodos,  
    validate: {
      query: Object.assign({}, Joi_Models.ADD_TODOS),
    },
    response: {
      schema: Joi.array().items(Object.assign({}, Joi_Models.LIST_TODOS)),
      failAction: FAIL_ACTION
    }
  }
});

routes.push({
  method: 'PUT',
  path: '/todos/{ID}',
  options: {
    auth: false,
    description: 'Todo get request',
    tags: ['api'],
    handler: API_TODO.updateTodos,
    response: {
      schema: Joi.array().items(Object.assign({}, Joi_Models.LIST_TODOS)),
      failAction: FAIL_ACTION
    }
  }
});

routes.push({
  method: 'DELETE',
  path: '/todos/{ID}',
  options: {
    auth: false,
    description: 'Todo get request',
    tags: ['api'],
    handler: API_TODO.deleteTodos,  
    response: {
      schema: Joi.array().items(Object.assign({}, Joi_Models.LIST_TODOS)),
      failAction: FAIL_ACTION
    }
  }
});
