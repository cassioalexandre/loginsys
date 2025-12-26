import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    // Limpeza: Remover tabelas antigas se existirem
    await db.withSchema('public').schema.dropTable('User').ifExists().execute()
    await db.withSchema('public').schema.dropTable('SignupToken').ifExists().execute()

    // Atualização: Adicionar colunas novas na tabela 'users'
    await db.withSchema('public').schema.alterTable('users')
        .addColumn('avatar_url', 'varchar')
        .addColumn('role', 'varchar', (col) => col.defaultTo('user').notNull())
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    // Reverter as colunas adicionadas
    await db.withSchema('public').schema.alterTable('users')
        .dropColumn('avatar_url')
        .dropColumn('role')
        .execute()

    // Nota: Não recriamos as tabelas 'User' e 'SignupToken' no down() 
    // porque não temos a definição exata/dados antigos delas.
}
