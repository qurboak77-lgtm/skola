import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/om-mig" className="footer-lank">Om mig</Link>
        <a href="/#projekt" className="footer-lank">Projekt</a>
        <a href="/#kontakt" className="footer-lank">Kontakt</a>
        
      </nav>
      <p>© 2026 Min Portfolio</p>
    </footer>
  );
}

export default Footer;
