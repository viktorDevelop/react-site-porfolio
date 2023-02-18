import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Item = ({project}) => {
    // console.log(project);
    
    return ( 
        
        <main className="section">
            { project && 
                <div className="container">
                    <div className="project-details">

                        <h1 className="title-1"> {project.title}  </h1>

         <img src={'../../images/projects/' + project.image} 
         alt="" 
         className="project-details__cover"/>

                        <div className="project-details__desc">
                            <p>{project.skils}</p>
                        </div>

                        <a href="#!" className="btn-outline">
                            <img src="/img/icons/gitHub-black.svg" alt="" />
                            GitHub repo
                        </a>

                    </div>
            </div>
             }
         </main>
       
     );
}
 
export default Item;