import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('todoItems', (builder) => {
    builder.date('due').defaultTo(null);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('todoItems', (builder) => {
    builder.dropColumn('due');
  });
}
