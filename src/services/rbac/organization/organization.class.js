const { Service } = require('feathers-knex');
const { organization } = require('../../../models/tableNames');

exports.Organization = class Organization extends Service {
  constructor(options, app) {
    super({
      ...options,
      name: organization,
    });
    this.app = app;
  }
};
