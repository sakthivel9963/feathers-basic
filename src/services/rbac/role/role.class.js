const { Service } = require('feathers-knex');
const { role } = require('../../../models/tableNames');

exports.Role = class Role extends Service {
  constructor(options, app) {
    super({
      ...options,
      name: role,
    });
    this.app = app;
  }
};
