import React,{useState} from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';    // USING FONTAWESOME LIB
import {Link} from 'react-router-dom';

const NavBar = () => {
    const[isOpen,setisOpen] = useState(false);
    const handleToggle = () =>{
        setisOpen(!isOpen);
    }
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to= "/"><img src={logo} alt="Beach Resort"/></Link>
                    <button onClick={(e)=>handleToggle(e)} type="button" className="nav-btn">
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rooms">Rooms</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
 