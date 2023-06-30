import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import {ThemeContext, ThemeProvider  } from '../Components/utils/ThemeContext';
import  { useContext } from 'react';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, changeTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  };

 

  return (

    <div className={`${theme}`}>
    <nav >
      
      <div>
        <h2>DH ODONTO</h2>
      </div>
      <div className='nav_icons'>
      <Link className='nav_button' to={`/`}>Home</Link>
      <Link className='nav_button' to={`/contacto`}>Contact</Link>
      <Link className='nav_button' to={`/favs`}>Favs</Link>
      <FontAwesomeIcon  className='nav_style' icon={faMoon} onClick={toggleTheme}/>
      </div>
    </nav>
    </div>
  )
}

export default Navbar