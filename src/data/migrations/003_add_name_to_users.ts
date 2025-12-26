import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    await db.withSchema('public').schema.alterTable('users')
        .addColumn('name', 'varchar')
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.withSchema('public').schema.alterTable('users')
        .dropColumn('name')
        .execute()
}
