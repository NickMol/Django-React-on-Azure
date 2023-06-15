import './App.css';
import ContentHolder from "./components/ContentHolder"
import Navbar from "./components/Navbar"
import NavbarHolder from "./components/NavbarHolder"
import Home from "./components/Home"
import About from './components/About'
import Contact from './components/Contact';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
          <NavbarHolder>
              <ContentHolder>
                  <Routes>
                    <Route path="/" element={<Home/>}/> 
                    <Route path="/contact" element={<Contact/>}/> 
                    <Route path="/about" element={<About/>}/> 
                  </Routes>
              </ContentHolder>
          </NavbarHolder>
    </div>
  );
}

export default App;
