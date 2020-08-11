const menuModel = require('../../../models/rbac/menu.model');
const menuHooks = require('./menu.hooks');
const { Menu } = require('./menu.class');

module.exports = function (app) {
  const options = {
    Model: menuModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/menu', new Menu(options, app));

  const service = app.service('menu');

  service.hooks(menuHooks);
};
