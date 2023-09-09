import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return ( 
        <nav className="navbar">
            <div className="logo">
            <Link to = "/"><h1>LOC Blog</h1></Link>
            </div>        
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`links ${menuOpen ? "open" : " "}`}>
                <Link to = "/">Home</Link>
                <Link to="/create">New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;