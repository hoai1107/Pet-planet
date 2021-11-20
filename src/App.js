import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/about" element={<About />}/>

        <Route path="/contact" element={<Contact />}/>
        
        <Route path="/" element={<Main />}/>
      </Routes>
    </div>
  )
};

export default App;
