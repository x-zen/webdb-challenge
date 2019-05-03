
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable()
        .unique();

      tbl
        .string('description', 128)
        .notNullable()
        .unique();

      tbl.boolean('completed')

      tbl
        .integer('actions_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('actions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('actions', tbl => {
      tbl.increments();

      tbl
        .string('description', 128)
        .notNullable()
        .unique();

      tbl
        .string('notes', 420)
        .notNullable()
        .unique();

      tbl.boolean('completed')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('actions');
};
