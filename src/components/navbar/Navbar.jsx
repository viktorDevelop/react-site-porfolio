import React from "react";
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import { NavLink } from "react-router-dom";
const Navbar = function() {
    const activeLink = 'nav-list__link--active';
    const normalLink = 'nav-list__link';

    const activeLinksItem = function(isActive){
        return isActive ? activeLink + ' ' + normalLink   : normalLink;

    }
    return (
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                 <strong>Freelancer</strong> portfolio
                </NavLink>
                 
                <button className="dark-mode-btn">
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                </button>

                <ul className="nav-list">
                    
                    <li className="nav-list__item">
                         
                <NavLink to="/" className={({isActive})=> activeLinksItem(isActive) }>
                           
                       
                                Home
                        </NavLink>
                    </li>


                    <li className="nav-list__item">
                        <NavLink to="/projects" className={({isActive})=> activeLinksItem(isActive) }>
                            Projects
                        </NavLink>
                    
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/contacts" className={({isActive})=> activeLinksItem(isActive) }>
                             Contacts
                        </NavLink>
                            
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
// nav-list__link--active
export default Navbar;