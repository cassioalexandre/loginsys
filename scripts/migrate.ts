import * as path from 'path'
import { promises as fs } from 'fs'
import {
    Migrator,
    FileMigrationProvider,
} from 'kysely'
import { db } from '../src/lib/db'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') })

console.log('Environment file path:', path.join(__dirname, '../.env'));
console.log('DATABASE_URL loaded:', process.env.DATABASE_URL ? process.env.DATABASE_URL.split('@')[1] : 'UNDEFINED'); // Print only host part

async function migrateToLatest() {
    const migrator = new Migrator({
        db,
        provider: new FileMigrationProvider({
            fs,
            path,
            // Path to the migration folder
            migrationFolder: path.join(__dirname, '../src/data/migrations'),
        }),
    })

    const { error, results } = await migrator.migrateToLatest()

    results?.forEach((it) => {
        if (it.status === 'Success') {
            console.log(`migration "${it.migrationName}" was executed successfully`)
        } else if (it.status === 'Error') {
            console.error(`failed to execute migration "${it.migrationName}"`)
        }
    })

    if (error) {
        console.error('failed to migrate')
        console.error(error)
        process.exit(1)
    }

    await db.destroy()
}

migrateToLatest()
