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
        <Route path="/about" element={<About />}/>

        <Route path="/contact" element={<Contact />}/>

        <Route path="/pets/:id" element={<Details />}/>

        <Route path="/pets/" element={<Pets />}/>
        
        <Route path="/" element={<Main />}/>
      </Routes>
    </div>
  )
};

export default App;