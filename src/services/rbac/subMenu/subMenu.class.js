const { Service } = require('feathers-knex');
const { subMenu } = require('../../../models/tableNames');

exports.SubMenu = class SubMenu extends Service {
  constructor(options, app) {
    super({
      ...options,
      name: subMenu,
    });
    this.app = app;
  }
};
