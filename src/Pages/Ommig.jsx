const fardigheter = ["HTML & CSS", "JavaScript", "React", "Git & GitHub", "Node.js"];

function OmMig() {
  return (
    <section className="om-mig">
      <div className="om-mig-box">
        <h2>Om mig</h2>
        <p>
          Hej! Jag heter Abbe och håller på att lära mig webbutveckling.
          Jag gillar att bygga webbplatser och lära mig nya saker hela tiden.
        </p>
        <p>
          På fritiden spelar jag fotboll,läsa böker utforskar nya projekt och hänger med vänner.
        </p>

        <h3>Färdigheter</h3>
        <ul className="om-lista">
          {fardigheter.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OmMig;


