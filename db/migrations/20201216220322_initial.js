const Knex = require('knex');
const addDefaultColumn = require('../../src/models/default.model');
const tablenames = require('../../src/models/tableNames');
/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tablenames.users, (table) => {
    table.increments('id').notNullable();
    table.string('email').unique().notNullable();
    table.string('user_name').unique().notNullable();
    table.string('password').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').nullable();
    table.string('mobile').nullable();
    table.string('image').nullable();
    addDefaultColumn(table);
  });
};

exports.down = async (knex) => {
  await Promise.all(
    [tablenames.users].map((tablename) => knex.schema.dropTable(tablename)),
  );
};
