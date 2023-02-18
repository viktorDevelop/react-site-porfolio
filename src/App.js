import './css/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Projects from './pages/projects';  
import Home from './pages/home';
import Contacts from './pages/contacts';
import ProjectDetail from './pages/ProjectDetail';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="App">
       <Router>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
       
            <Route  path='/' element={<Home/>} /> 
            <Route  path='/projects' element={<Projects/>} /> 
            <Route  path='/project/:id' element={<ProjectDetail/>} /> 
            <Route  path='/contacts' element={<Contacts/>}  /> 
            
        </Routes>
          
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
