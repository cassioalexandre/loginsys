import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    await db.withSchema('public').schema
        .createTable('users')
        .addColumn('id', 'uuid', (col) => col.primaryKey().notNull())
        .addColumn('email', 'varchar', (col) => col.notNull().unique())
        .addColumn('password_hash', 'varchar')
        .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.withSchema('public').schema.dropTable('users').execute()
}
