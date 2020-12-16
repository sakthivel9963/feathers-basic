const knex = require('knex');
const knexConfig = require('../knexfile');

module.exports = (app) => {
  const enviroment = process.env.NODE_ENV || 'development';
  const connectionConfig = knexConfig[enviroment];
  const db = knex(connectionConfig);

  app.set('knexClient', db);
};
