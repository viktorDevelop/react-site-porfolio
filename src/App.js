import './css/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
        
     <Navbar/>
      <Home/>
      <Footer></Footer>
    </div>
  );
}

export default App;
