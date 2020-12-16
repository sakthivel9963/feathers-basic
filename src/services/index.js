// const companyService = require('./rbac/company/company.service.js');
// const organizationService = require('./rbac/organization/organization.service.js');
// const roleService = require('./rbac/role/role.service.js');
// const menuService = require('./rbac/menu/menu.service.js');
// const subMenuService = require('./rbac/subMenu/subMenu.service.js');
const usersService = require('./rbac/users/users.service.js');

module.exports = (app) => {
  // app.configure(companyService);
  // app.configure(organizationService);
  // app.configure(roleService);
  // app.configure(menuService);
  // app.configure(subMenuService);
  app.configure(usersService);
};
