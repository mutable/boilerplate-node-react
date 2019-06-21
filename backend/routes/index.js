const health = require('./health');
const api = require('./api');
const todos = require('./todos');

const _routes = [health, api, todos];
const Routes = [];

_routes.forEach((_route) => {
  if (typeof _route === 'object' && _route.length) {
    _route.forEach((_r) => {
      Routes.push(_r);
    });
  } else if (typeof _route === 'object') { Routes.push(_route); }
});

module.exports = Routes;