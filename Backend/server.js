const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
const port = 3000;

// Tillåter frontenden (React) att hämta data utan att blockeras av webbläsarens säkerhet (CORS)
app.use(cors());
app.use(express.json());

// Koppla upp mot vår databas
const db = new Database('produkter.db', { fileMustExist: true });

// Här skapar vi "bron" (vår /api/produkter rutt)
app.get('/api/produkter', (req, res) => {
  try {
    // SQL-kommando som hämtar alla rader ur tabellen "produkter"
    const produkter = db.prepare('SELECT * FROM produkter').all();
    
    // Skickar tillbaka all data till frontenden (i praktiken som JSON)
    res.json(produkter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ett fel uppstod vid hämtning av produkter' });
  }
});

app.listen(port, () => {
  console.log(`Backend server körs på http://localhost:${port}`);
});

