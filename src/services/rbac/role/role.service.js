const roleModel = require('../../../models/rbac/role.model');
const roleHooks = require('./role.hooks');
const { Role } = require('./role.class');

module.exports = function (app) {
  const options = {
    Model: roleModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/role', new Role(options, app));

  const service = app.service('role');

  service.hooks(roleHooks);
};
