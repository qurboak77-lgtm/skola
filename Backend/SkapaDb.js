const Database = require('better-sqlite3')
const db = new Database('skola.db')

db.exec(`
  CREATE TABLE IF NOT EXISTS elever (
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    namn TEXT    NOT NULL,
    klass TEXT
  )
`)

// Testdata
const laggTill = db.prepare('INSERT INTO elever (namn, klass) VALUES (?, ?)')

laggTill.run('Anna Andersson', '3A')
laggTill.run('Erik Svensson',  '3A')
laggTill.run('Maja Lindqvist', '3B')
laggTill.run('Oscar Nilsson',  '3B')

const elever = db.prepare('SELECT * FROM elever').all()
console.log('Databas skapad! Elever i tabellen:')
console.table(elever)

