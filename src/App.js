import './css/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Projects from './pages/projects';  
import Home from './pages/home';
import Contacts from './pages/contacts';
import projectDetail from './pages/projectDetail';
function App() {
  return (
    <div className="App">
        
     <Navbar/>
      {/* <Home/> */}
      {/* <Projects/> */}
      {projectDetail}
      {/* <Contacts/> */}
      <Footer/>
    </div>
  );
}

export default App;
