
/**
* DEMO FILE
*
* Swagger options configuration
**/

const Package = require('../package.json');

const swaggerOptions = {
  documentationPath: '/',
  auth: false,
  schemes: ['http', 'https'],
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  },
  security: [{ Bearer: [] }],
  info: {
    title: Package.name,
    description: Package.description,
    version: Package.version
  }
};

module.exports = swaggerOptions;