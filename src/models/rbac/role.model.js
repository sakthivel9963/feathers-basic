/* eslint-disable no-console */

// users-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
const defaultValue = require('../default.model');
const { role, organization, company } = require('../tableNames');

module.exports = async function (app) {
  const db = app.get('knexClient');
  const tableName = role;
  try {
    const exists = await db.schema.hasTable(tableName);
    if (!exists) {
      await db.schema.createTable(tableName, (table) => {
        table.increments('id');
        table.string('name').unique();
        table.text('description');
        table.json('roles');
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
