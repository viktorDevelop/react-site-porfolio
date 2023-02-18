import React from "react";
import { Link } from "react-router-dom";

const Items = function({title,img,id}) {
    return (
        <li className="project">
            <Link to={`/project/${id}`}>
                <img src={'images/projects/' + img} alt="Project img" className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </Link>
            <a href="./project-page.html">
            
              
            </a>
        </li>
    )   
}

export default Items;