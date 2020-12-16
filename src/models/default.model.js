module.exports = (table) => {
  table.string('status');
  table.integer('created_by');
  table.integer('updated_by');
  table.timestamps(false, false);
  table.integer('deleted_by');
  table.datetime('deleted_at');
  return table;
};
