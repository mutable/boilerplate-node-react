const health = require('./health');
const api = require('./api');
const todos = require('./todos');

const _routes = [health, api, todos];
const routes = [];

_routes.forEach((_route) => {
  if (typeof _route === 'object' && _route.length) {
    _route.forEach((_r) => {
      routes.push(_r);
    });
  } else if (typeof _route === 'object') { routes.push(_route); }
});

module.exports = routes;