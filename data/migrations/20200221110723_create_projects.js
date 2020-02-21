exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.text('name', 128)
          .notNullable()
        tbl.text('description', 1024)
        tbl.boolean('completed')
          .notNullable()
          .defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.text('name', 128)
          .notNullable()
          .unique()
        tbl.text('description', 1024)
        tbl.integer('project_id')
        .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT')
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.text('description', 1024)
          .notNullable()
        tbl.text('notes', 4096)
        tbl.boolean('completed')
          .notNullable()
          .defaultTo(false)
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
  };
  