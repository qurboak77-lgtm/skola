import { useState } from 'react';
import ehandel from '../assets/ehandel.jpg';
import foretag from '../assets/Företag.jpg';
import portfolio from '../assets/Portfolio.jpg';

const projekt = [
  {
    titel: 'Projekt 1',
    namn: 'PORTFOLIO',
    bild: portfolio,
    alt: 'Portfolio',
    beskrivning: 'En personlig portfoliosida byggd med React och Vite. Visar mina projekt och kontaktuppgifter.',
    lank: '#',
    lankText: 'Se projekt',
  },
  {
    titel: 'Projekt 2',
    namn: 'DARAKURSER',
    bild: foretag,
    alt: 'Darakurser',
    beskrivning: 'En företagssida för kurser inom data och IT. Byggd med HTML och CSS.',
    lank: '#',
    lankText: 'Se hemsida',
  },
  {
    titel: 'Projekt 3',
    namn: 'E-HANDEL',
    bild: ehandel,
    alt: 'E-handel',
    beskrivning: 'En e-handelssida med produktlistning och varukorg. Byggd med HTML, CSS och JavaScript.',
    lank: '#',
    lankText: 'Se hemsida',
  },
];

function ProjektKort({ titel, namn, bild, alt, beskrivning, lank, lankText }) {
  const [visaInfo, setVisaInfo] = useState(false);

  return (
    <div className="projekt-kort">
      <h3>{titel}</h3>
      <p>{namn}</p>
      <img src={bild} className="foretag-bild" alt={alt} />
      <button className="visa-mer-knapp" onClick={() => setVisaInfo(!visaInfo)}>
        {visaInfo ? 'Visa mindre' : 'Visa mer'}
      </button>
      {visaInfo && <p className="projekt-beskrivning">{beskrivning}</p>}
      <a href={lank} className="knapp">{lankText}</a>
    </div>
  );
}

function Projekt() {
  return (
    <section className="projekt">
      <h2>Mina Projekt</h2>
      <div className="projekt-grid">
        {projekt.map((p) => (
          <ProjektKort key={p.namn} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projekt;
