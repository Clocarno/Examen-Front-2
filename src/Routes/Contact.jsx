import React from 'react'
import Form from '../Components/Form'
import {ThemeContext } from '../Components/utils/ThemeContext';
import  { useContext } from 'react';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { theme } = useContext(ThemeContext);
  return (
    <div className={`init ${theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact