import Hero from "../components/Hero";

export default function Hem() {
  return (
    <>
      <Hero />
      <section className="om-mig">
        <div className="om-mig-box">
          <h2>Välkommen</h2>
          <p>
            Det här är startsidan. Använd menyn för att gå till mina Projekt,
            Kontakt eller Om mig.
          </p>
          <div className="hem-flikar">
            <a href="#hem" className="hem-flik">Hem</a>
            <a href="#om-mig" className="hem-flik">Om mig</a>
            <a href="#projekt" className="hem-flik">Projekt</a>
            <a href="#kontakt" className="hem-flik">Kontakt</a>
            <a href="#faq" className="hem-flik">FAQ</a>
            <a href="#myinfo" className="hem-flik">MyInfo</a>
          </div>
          <div className="hem-knappar">
            <a href="#projekt" className="knapp">
              Se projekt
            </a>
            <a href="#kontakt" className="knapp">
              Kontakta mig
            </a>
            <a href="#om-mig" className="knapp">
              Om mig
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

