import pp from './images/pp.jpg'
import './NavBar.css'
function Navbar({ onNavigate }){
    return(
        <div className="Header">
        <div className="Header-content">
        <div className="Logo">
            <div className="logoImg">
                <img src={pp} />
            </div>
            <span className="logo-name">Sujal Pokhrel</span>
        </div>
        <div className="NavLinks">
            <ul className="pageLinks">
                <li className="pagelink">
                <a href="#" className="links" onClick={() => onNavigate("LandingPage")}>Home</a>
                </li>
                <li className="pagelink">
                <a href="#" className="links" onClick={() => onNavigate("PortfolioPage")}>Portfolio</a>
                </li>
                <li className="pagelink">
                <a href="#" className="links" onClick={() => onNavigate("About")} >About</a>
                </li>
                <li className="pagelink">
                <a href="#" className="links" onClick={() => onNavigate("Contact")}>Contact</a>
                </li>
            </ul>
        </div>
        </div>
    </div>
    );
}

export default Navbar;