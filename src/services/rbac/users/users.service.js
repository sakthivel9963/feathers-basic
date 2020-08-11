const { Users } = require('./users.class');
const userModel = require('../../../models/rbac/users.model');
const userHooks = require('./users.hooks');

module.exports = function (app) {
  const options = {
    Model: userModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/users', new Users(options, app));

  const service = app.service('users');

  service.hooks(userHooks);
};
