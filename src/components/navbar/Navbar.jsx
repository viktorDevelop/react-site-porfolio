import React from "react";

import { NavLink } from "react-router-dom";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
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
                 Portfolio
                </NavLink>
                 
               <SwitchTheme/>

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