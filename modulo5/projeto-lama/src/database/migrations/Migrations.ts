import { BaseDatabase } from "../BaseDatabase"
import { ShowDatabase } from "../ShowDatabase"
import { UserDatabase } from "../UserDatabase"
import { shows, tickets, users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ShowDatabase.TABLE_TICKETS};
        DROP TABLE IF EXISTS ${ShowDatabase.TABLE_SHOWS};
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ShowDatabase.TABLE_SHOWS}(
            id VARCHAR(255) PRIMARY KEY,
            band VARCHAR(255) NOT NULL,
            starts_at DATE NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ShowDatabase.TABLE_TICKETS}(
            id VARCHAR(255) PRIMARY KEY,
            show_id VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES ${UserDatabase.TABLE_USERS}(id),
            FOREIGN KEY (show_id) REFERENCES ${ShowDatabase.TABLE_SHOWS}(id)
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)

        await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .insert(shows)

        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .insert(tickets)
    }
}

const migrations = new Migrations()
migrations.execute()