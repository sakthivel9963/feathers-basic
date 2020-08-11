const { Service } = require('feathers-knex');
const { company } = require('../../../models/tableNames');

exports.Company = class Company extends Service {
  constructor(options, app) {
    super({
      ...options,
      name: company,
    });
    this.app = app;
  }
};
