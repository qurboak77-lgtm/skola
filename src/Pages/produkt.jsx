import React, { useState, useEffect } from 'react';
import './Produkter.css';

const Produkter = () => {
  // Tillstånd för att spara vår data, kolla om det laddar och fånga fel
  const [produkter, setProdukter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Körs direkt när komponenten/produktsidan dyker upp på skärmen
  useEffect(() => {
    // Anropar länken in till Express-servern (Vår "bro")
    fetch('http://localhost:3000/api/produkter')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Nätverksfel vid hämtning av produkter');
        }
        return res.json();
      })
      .then((data) => {
        // Om allt gick bra: Spara in produkterna
        setProdukter(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="produkter-container">
        <h2>Laddar produkter...</h2>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="produkter-container">
        <h2>Fel</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="produkter-container">
      <h1 className="produkter-title">Våra Produkter</h1>
      <p className="produkter-subtitle">Upptäck vårt fantastiska sortiment</p>
      
      {/* Här nedan "loopar" vi (.map) för att rita ut HTML för varje produkt från databasen */}
      <div className="produkter-grid">
        {produkter.map((produkt) => (
          <div key={produkt.id} className="produkt-card">
            {produkt.image && (
              <div className="produkt-image-wrapper">
                <img src={produkt.image} alt={produkt.namn} className="produkt-image" />
              </div>
            )}
            <div className="produkt-content">
              <h3 className="produkt-name">{produkt.namn}</h3>
              {produkt.sku && <span className="produkt-sku">SKU: {produkt.sku}</span>}
              <p className="produkt-desc">{produkt.beskrivning || 'Ingen beskrivning tillgänglig.'}</p>
              <div className="produkt-footer">
                <span className="produkt-price">{produkt.pris} kr</span>
                <button className="produkt-button">Köp Nu</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produkter;

