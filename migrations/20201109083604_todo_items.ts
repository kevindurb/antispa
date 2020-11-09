import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('todoItems', (builder) => {
    builder.text('id').unique().notNullable().primary();
    builder.text('label').notNullable().defaultTo('');
    builder.boolean('done').notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('todoItems')
}
