import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">Min sida</Link>
      <nav className="header-nav">
        <Link to="/om-mig" className="nav-lank">Om mig</Link>
        <a href="/#projekt" className="nav-lank">Projekt</a>
        <a href="/#kontakt" className="nav-lank">Kontakt</a>
      </nav>
    </header>
  );
}

export default Header;
