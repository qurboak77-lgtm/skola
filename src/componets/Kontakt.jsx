function Kontakt () {
    return(
        <section className="Kontakt">
            <div className="Kontakt-box">
                <h2>kontatka mig </h2>
                <p> här kan du kontakta mig</p>
                <form>
                    <input className="Kontakt input" type="text" placeholder="Abbe"/>
                    <input className="Kontakt input" type="email" placeholder="quatro44@gmail.com" />
                    <textarea className="Kontakt-input" placeholder="ditt meddelande"rows="5"></textarea> 
                    <button className="Kontakt-knapp" type="submit"> skicka </button>
                </form>
            </div>
        </section>
    );
}
export default Kontakt;