import './css/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Projects from './pages/projects';  
import Home from './pages/home';
import Contacts from './pages/contacts';
import ProjectDetail from './pages/ProjectDetail';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>

        <Routes>
            <Route  path='/' element={<Home/>} /> 
            <Route  path='/projects' element={<Projects/>} /> 
            <Route  path='/projects/:id' element={<ProjectDetail/>} /> 
            <Route  path='/contacts' element={<Contacts/>}  /> 
                         

            
        </Routes>
          {/* <Home/> */}
          {/* <Projects/> */}
          {/* {<ProjectDetail />} */}
          {/* <Contacts/> */}
          <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
