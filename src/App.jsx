
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams  } from 'react-router-dom';

import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import  { useContext } from 'react';
import DentistContextProvider from './Components/utils/DentistContext';  
import {ThemeContext, ThemeProvider  } from './Components/utils/ThemeContext';



function App() {

 
  
  

  return (
      <div className="App">
        <ThemeProvider>
        <Router>
          <Navbar/>
          <DentistContextProvider >
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dentist/:id" element={<Detail/>} />
            <Route path="/contacto" element={<Contact/>} />
            <Route path="/favs" element={<Favs/>} />
          </Routes>
          <Footer/>
          </DentistContextProvider>
         </Router>
         </ThemeProvider>
      </div>
  );
}

export default App;
