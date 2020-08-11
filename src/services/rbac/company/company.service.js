const companyModel = require('../../../models/rbac/company.model');
const companyHooks = require('./company.hooks');
const { Company } = require('./company.class');

module.exports = function (app) {
  const options = {
    Model: companyModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/company', new Company(options, app));

  const service = app.service('company');

  service.hooks(companyHooks);
};
