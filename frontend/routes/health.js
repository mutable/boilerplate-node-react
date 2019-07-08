
const tooBusy = require('toobusy-js');

const routes = [];
module.exports = routes;

routes.push({
  method: 'GET',
  path: '/health',
  options :{
    description: 'Health Check',
    handler: () => tooBusy.lag().toString()
  }
});
