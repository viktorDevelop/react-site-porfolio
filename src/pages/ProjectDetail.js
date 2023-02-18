import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/projects/Item";
import  dataProjects from '../helpers/projectsList';

const ProjectDetail = () => {

    const  {id} = useParams();   
    const getProject = (id)=>{
         
        let project =  dataProjects.filter(function(proj) {
            return proj.id == id;
        });
        return project[0];
    }
     
    

    return (

        <>
         <Item project = {getProject(id)}></Item>
        </>

    );
}
 
export default ProjectDetail;