import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OmMig from "./pages/OmMig";
import Hem from "./pages/Hem";
import Projekt from "./components/Projekt";
import Kontakt from "./components/Kontakt";
import FAQ from "./components/FAQ";
import MyInfo from "./pages/MyInfo";
import AdminProdukter from "./pages/AdminProdukter";
import AdminNyProdukt from "./pages/AdminNyprodukt";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        {/* LANDNINGSSIDAN (Alla dina sektioner) */}
        <Route path="/" element={
          <>
            <section id="hem"><Hem /></section>
            <section id="om-mig"><OmMig /></section>
            <section id="projekt"><Projekt /></section>
            <section id="kontakt"><Kontakt /></section>
            <section id="faq"><FAQ /></section>
            <section id="myinfo"><MyInfo /></section>
          </>
        } />
          {/* Separata sidor för Admin – här fungerar navigate perfekt */}
            <Route path="/admin" element={<AdminProdukter />} />
            <Route path="/admin/ny" element={<AdminNyProdukt />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
