import { Link } from "react-router-dom";

function Header () {
    return (
        <header className="header">
            <Link to="/" className="header-logo">Min sida</Link>
            
            <nav className="header-nav ">       
                <Link to="/om-mig" className="nav-link">om mig</Link>
                <a href="#om-mig" className="nav-link"> loga in </a>
                <a href="#projekt" className="nav-link"> projekt </a>
               <a href="#projekt" className="nav-link"> mina sidor </a>
                <a href="#kontakt" className="nav-link">kontakt</a>
                <a href="#kontakt" className="nav-link">Min grupp</a>
            </nav>
        </header>
    )
}
    
export default Header;