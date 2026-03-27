import {BrowserRouter , Routes , Route } from "react-router-dom"
import "./App.css";
import Header from "./componets/Header";
import Hero  from "./componets/hero"; 
import Mali from "./componets/mali";
import Footer from "./componets/Footer";
import Projekt from "./componets/Projekt";
import Kontakt from "./componets/Kontakt";
import Ommig from "./Pages/Ommig"



function Hem() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Hem/>} />
      <Route path="/ Om-mig" element={<Ommig/>} />
       </Routes>
    </BrowserRouter>
    

    
    
  );
    
}
 







function App() {

  return (
    <>
    <Header />
    <Hero/>
    <Mali/>
    <Projekt/>
    <Kontakt/>
    <Footer/>

    
    </>
  );
    
}
export default App;





