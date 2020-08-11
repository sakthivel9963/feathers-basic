/* eslint-disable no-console */

// users-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
const defaultValue = require('../default.model');
const { company, organization } = require('../tableNames');

module.exports = async function (app) {
  const db = app.get('knexClient');
  const tableName = organization;
  try {
    const exists = await db.schema.hasTable(tableName);
    if (!exists) {
      await db.schema.createTable(tableName, (table) => {
        table.increments('id');
        table.string('name').unique().notNullable();
        table.string('email').unique().notNullable();
        table.text('description');
        table.string('mobile');
        table.string('address');
        table.string('image');
        table
          .integer('company_id')
          .unsigned()
          .references('id')
          .inTable(`${company}`)
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
