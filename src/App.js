import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Navbar from "./components/Navbar";
import Details from './pages/Details';
import Pets from './pages/Pets';

const App = () => {

  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/Pet-planet/about" element={<About />}/>

        <Route path="/Pet-planet/contact" element={<Contact />}/>

        <Route path="/Pet-planet/pets/:id" element={<Details />}/>

        <Route path="/Pet-planet/pets" element={<Pets />}/>
        
        <Route path="/Pet-planet/" element={<Main />}/>
      </Routes>
    </div>
  )
};

export default App;
