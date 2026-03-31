import heroBild from '../assets/offside.jpg';


function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBild})` }}>
      <div className="hero-overlay" />
      <div className="hero-text">
        <p className="hero-superscript">PORTFOLIO</p>
        <h1>Hej, jag är Qurbo Ak och detta är min pro club hemsida</h1>
        <p>Välkommen till min personliga webbplats!</p>
        <p>Här kan du se mina projekt och lära känna mig lite bättre.</p>
      </div>
    </section>
  );
}

export default Hero;
