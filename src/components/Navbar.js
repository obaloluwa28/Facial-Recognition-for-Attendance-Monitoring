import React, { useState } from 'react'
import '../components/Navbar.css'
import { Link } from 'react-router-dom';
import ComLogo from 'C:/Users/KING/Documents/ReactAPP/studentmanagement/src/assets/Logoo4.png'
import Avater from 'C:/Users/KING/Documents/ReactAPP/studentmanagement/src/assets/2n2.png'
import '../components/Navbar.css'
import { Navbardata } from './Navbardata'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    function showSidebar(){
        setSidebar(!sidebar);
        setClick(!click)
    }

    const [click, setClick] = useState(false)
    const atClick = () => setClick(!click)
    
    return (
        <>
            <div className="header">
                <Link to="/" className="myLogo">
                    <img src={ComLogo} alt="logo"/>
                </Link>
                <div className="currentDirectory">
                    FACE RECOGNITION ATTENDANCE MONITORING SYSTEM
                </div>
            </div>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick={showSidebar}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars" onClick={atClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                        </Link>
                    </li>
                    {
                        Navbardata.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} onClick={showSidebar}>
                                        {item.icons}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="profile">
                    <img className="avaterimg" alt="avarter" src={Avater}/>
                    <p id="parag2">Admin</p>
                </div>
            </nav>   

            <div className="footer">
                &#xa9; King's Techtronics
            </div> 
        </>
    )
}

export default Navbar
