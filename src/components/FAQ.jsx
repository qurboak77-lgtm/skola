import { useState } from 'react'
import './FAQ.css'


const faqs = [
  {
    q: "Vad ar Pro Club?",
    a: "Pro Club ar vart lag dar vi spelar tillsammans, utvecklar var taktik och har roligt som ett team.",
  },
  {
    q: "Hur kan jag ga med i laget?",
    a: "Skicka ett meddelande via kontaktsidan med din position och spelstil, sa aterkommer vi med mer info.",
  },
  {
    q: "Behover jag vara jattebra for att vara med?",
    a: "Nej. Det viktigaste ar att du vill samarbeta, lyssna pa laget och utvecklas over tid.",
  },
  {
    q: "Vilka positioner sokar ni mest?",
    a: "Vi letar oftast efter spelare till flera positioner. Beratta vad du trivs med sa hittar vi en bra roll.",
  },
  {
    q: "Hur ofta spelar ni?",
    a: "Vi spelar flera ganger i veckan med planerade tider for matcher och traning.",
  },
  {
    q: "Kan man få en anpassad position/roll i laget?",
    a: "Ja — vi anpassar roller efter din spelstil, dina styrkor och vad laget behöver för att prestera på topp.",
  },
  {
    q: "Vilken typ av spelare söker ni?",
    a: "Vi söker lagspelare med bra attityd, kommunikation och vilja att förbättras — oavsett position.",
  },
  {
    q: "Hur ofta spelar ni matcher?",
    a: "Vi spelar regelbundet flera gånger i veckan. Tider och matcher planeras för att passa laget och hålla en bra nivå.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(2)

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-header">
          <span className="section-label">Vanliga frågor</span>
          <h2 className="faq-title">Svar på vanliga frågor</h2>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className={`faq-item ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="faq-row">
                <span className="faq-q">{f.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </div>
              {open === i && <p className="faq-a">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

