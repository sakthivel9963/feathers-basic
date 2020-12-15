const { Service } = require('feathers-knex');
const { users } = require('../../../models/tableNames');

exports.Users = class Users extends Service {
  constructor(options, app) {
    super({
      ...options,
      name: users,
    });
    // this.app = app;
  }
};
