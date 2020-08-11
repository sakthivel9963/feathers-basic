const organizationModel = require('../../../models/rbac/organization.model');
const organizationHooks = require('./organization.hooks');
const { Organization } = require('./organization.class');

module.exports = function (app) {
  const options = {
    Model: organizationModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/organization', new Organization(options, app));

  const service = app.service('organization');

  service.hooks(organizationHooks);
};
