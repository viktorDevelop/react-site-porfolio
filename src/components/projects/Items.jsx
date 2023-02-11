import React from "react";

const Items = function({title,img}) {
    return (
        <li className="project">
            <a href="./project-page.html">
            
                <img src={'images/projects/' + img} alt="Project img" className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </a>
        </li>
    )   
}

export default Items;