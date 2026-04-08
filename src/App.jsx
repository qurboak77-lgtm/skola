import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OmMig from "./pages/OmMig";
import Hem from "./pages/Hem";
import Projekt from "./components/Projekt";
import Kontakt from "./components/Kontakt";
import FAQ from "./components/FAQ";
import MyInfo from "./pages/MyInfo";

function App() {
  return (
    <>
      <Header />
      <section id="hem">
        <Hem />
      </section>
      <section id="om-mig">
        <OmMig />
      </section>
      <section id="projekt">
        <Projekt />
      </section>
      <section id="kontakt">
        <Kontakt />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="myinfo">
        <MyInfo />
      </section>
      <Footer />
    </>
  );
}

export default App;
