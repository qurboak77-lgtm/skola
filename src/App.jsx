import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projekt from "./components/Projekt";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";
import OmMig from "./pages/OmMig";

function Hem() {
  return (
    <>
      <Header />
      <Hero />
      <Projekt />
      <Kontakt />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om-mig" element={<OmMig />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
