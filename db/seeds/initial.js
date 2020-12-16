const Knex = require('knex');
const tablenames = require('../../src/models/tableNames');

/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
  await knex(tablenames.users).del();
  const data = {
    email: 'sakthivel',
    password: 'test',
    user_name: 'sakthivel',
    first_name: 'sakthivel',
    last_name: 'a',
    created_by: 3,
    created_at: '2015-11-05 14:29:36',
  };
  await knex(tablenames.users).insert(data);
};
