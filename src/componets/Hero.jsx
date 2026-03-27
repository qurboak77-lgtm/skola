import bild from "../assets/messsi.jpg";

function Hero(params) {
    return (
    <section className="hero">
        <div> 
        <h1>välkommen till MR CHarge FEX</h1>
        <p> just do it </p>
        <p> kontakt uppgifter</p>
        <p> här kan du se allt du behöver</p>
        </div>
        <img src={bild} alt=" min bild" className="min-bild"/>
     </section>
    )
}
export default Hero;