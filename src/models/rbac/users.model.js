/* eslint-disable no-console */

// users-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
const defaultValue = require('../default.model');
const { users, role, organization, company } = require('../tableNames');

module.exports = async function (app) {
  const db = app.get('knexClient');
  const tableName = users;

  try {
    const exists = await db.schema.hasTable(tableName);
    if (!exists) {
      await db.schema.createTable(tableName, (table) => {
        table.increments('id');
        table.string('email').unique();
        table.string('user_name').unique();
        table.string('password');
        table.string('first_name');
        table.string('last_name');
        table.string('mobile');
        table.string('image');
        table.integer('role_id').unsigned().references('id').inTable(`${role}`);
        table
          .integer('company_id')
          .unsigned()
          .references('id')
          .inTable(`${company}`)
          .onDelete('cascade');
        table
          .integer('organization_id')
          .unsigned()
          .references('id')
          .inTable(`${organization}`)
          .onDelete('cascade');
        defaultValue(table);
      });
      console.log(`Created ${tableName} table`);
    }
    return db;
  } catch (error) {
    console.error(error);
  }
};
