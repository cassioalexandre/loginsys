import { Kysely, PostgresDialect, Generated } from 'kysely'
import { Pool } from 'pg'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Garantir que as variáveis de ambiente sejam carregadas
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

export interface UserTable {
    id: string
    name: string | null
    email: string
    password_hash: string | null
    avatar_url: string | null
    role: string
    created_at: Generated<Date>
    updated_at: Generated<Date>
}

// Definição das tabelas do nosso banco
export interface Database {
    users: UserTable
}

const dialect = new PostgresDialect({
    pool: new Pool({
        connectionString: process.env.DATABASE_URL,
    }),
})

// Instância do banco de dados para usar em todo o projeto
export const db = new Kysely<Database>({
    dialect,
}).withSchema('public')
