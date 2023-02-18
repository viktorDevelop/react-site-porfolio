
import Items  from '../components/projects/Items';
import  dataProjects from '../helpers/projectsList';
const Projects = () => {
    return (  

        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">               
                {dataProjects.map((item,index)=>{

                    return (
                        <Items key = {item.id}                                 
                                img = {item.image}
                                title = {item.title}
                                id = {item.id}

                                 />
                    )
                })}
              
            </ul>
        </div>
    </main>

     );
}
 
export default Projects;