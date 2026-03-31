import { useState } from 'react';

function Kontakt() {
  const [skickad, setSkickad] = useState(false);

  function hanteraSkicka(e) {
    e.preventDefault();
    setSkickad(true);
  }

  return (
    <section className="kontakt">
      <div className="kontakt-box">
        <h2>Kontakt</h2>
        <p className="kontakt-text">Hör av dig så hör jag av mig!</p>
        {skickad ? (
          <p className="kontakt-bekraftelse">Tack! Ditt meddelande är skickat.</p>
        ) : (
          <form className="kontakt-form" onSubmit={hanteraSkicka}>
            <input className="kontakt-input" type="text" placeholder="Ditt namn" />
            <input className="kontakt-input" type="email" placeholder="Din e-post" />
            <textarea className="kontakt-input" placeholder="sammanfattning av dig" rows="5"></textarea>
            <button className="kontakt-knapp" type="submit">Skicka</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Kontakt;
