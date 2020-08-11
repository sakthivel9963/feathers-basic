const { Service } = require('feathers-knex');
const { menu } = require('../../../models/tableNames');

exports.Menu = class Menu extends Service {
  constructor(options, app) {
    super({
      ...options,
      name: menu,
    });
    this.app = app;
  }
};
