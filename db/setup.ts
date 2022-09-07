import { quotes } from '../data'
import { quotesAuthor } from '../data'
import Database from 'better-sqlite3'

const db = Database('./db/data.db', { verbose: console.log })

const createQuotesTable = db.prepare(`
CREATE TABLE IF NOT EXISTS quotes (
    id INTEGER,
    quote TEXT,
    authorId INTEGER,
    PRIMARY KEY (id)
);`)

createQuotesTable.run()

const createAuthorsTable = db.prepare(`
CREATE TABLE IF NOT EXISTS authors (
    id INTEGER,
    name TEXT,
    age INTEGER,
    image TEXT,
    PRIMARY KEY (id)
);`)

createAuthorsTable.run()

const insertQuotes = db.prepare(`
INSERT INTO quotes (id, quote, authorId)
VALUES (?, ?, ?)
`)

const insertAuthors = db.prepare(`
INSERT INTO authors (id, name, age, image)
VALUES (?, ?, ?, ?)
`)

for (let quote of quotes) {
  insertQuotes.run(quote.id, quote.quote, quote.authorId)
}

for (let author of quotesAuthor) {
    insertAuthors.run(author.id, author.authorName, author.authorAge, author.image)
    }
