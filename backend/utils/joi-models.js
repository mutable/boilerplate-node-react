
/**
* DEMO FILE
*
* Dummy request validator
**/

const Joi = require('@hapi/joi');

const Models = {};
module.exports = Models;


// Example validation
Models.LIST_DEFAULT = {
  offset: Joi.number().optional().default(0).description('Set db query OFFSET'),
  limit: Joi.number().optional().default(10).description('Set db query LIMIT')
}


// Todo Validation
Models.LIST_TODOS = {
  id: Joi.number().optional().description('Todo id'),
  text: Joi.string().optional().description('Todo text')
}

Models.ADD_TODOS = {
  text: Joi.string().optional().description('Todo text')
}