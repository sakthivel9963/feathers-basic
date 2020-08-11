const subMenuModel = require('../../../models/rbac/subMenu.model');
const subMenuhooks = require('./subMenu.hooks');
const { SubMenu } = require('./subMenu.class');

module.exports = function (app) {
  const options = {
    Model: subMenuModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/subMenu', new SubMenu(options, app));

  const service = app.service('subMenu');

  service.hooks(subMenuhooks);
};
