import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('snack',(table)=>{
        table.uuid('id').primary(),
        table.text('name').notNullable,
        table.text('description').notNullable,
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable,
        table.boolean('diet').defaultTo(true),
        table.uuid('user_id').references('id').inTable('user')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('snack')
}

