import { db } from '../src/lib/db'
import { sql } from 'kysely'

async function listTables() {
    console.log('📦 Listando tabelas do schema public...')

    const tables = await sql<{
        table_name: string
        column_name: string
        data_type: string
        is_nullable: string
    }>`
    SELECT 
      t.table_name,
      c.column_name,
      c.data_type,
      c.is_nullable
    FROM information_schema.tables t
    JOIN information_schema.columns c ON c.table_name = t.table_name 
    WHERE t.table_schema = 'public' 
    ORDER BY t.table_name, c.ordinal_position;
  `.execute(db)

    if (tables.rows.length === 0) {
        console.log('Nenhuma tabela encontrada no schema public.')
    } else {
        let currentTable = ''
        tables.rows.forEach(row => {
            if (row.table_name !== currentTable) {
                console.log(`\n📄 Tabela: ${row.table_name}`)
                console.log('----------------------------------------')
                currentTable = row.table_name
            }
            console.log(` - ${row.column_name}: ${row.data_type} (${row.is_nullable === 'YES' ? 'nullable' : 'not null'})`)
        })
    }

    await db.destroy()
}

listTables().catch(err => console.error(err))
