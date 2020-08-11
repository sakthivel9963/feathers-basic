module.exports = function (table) {
  table.string('active');
  table.integer('created_by');
  table.integer('updated_by');
  table.integer('deleted_by');
  table.timestamps(false, true);
  table.datetime('deleted_at');
  return table;
};
