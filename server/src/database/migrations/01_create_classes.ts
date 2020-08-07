import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
    // CASCADE -> caso o id seja alterado, ele é alterado em todas as tabelas que usam esse id
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}