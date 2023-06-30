import React from 'react'
import Card from '../Components/Card'
import  { useContext } from 'react';
import { DentistContext } from '../Components/utils/DentistContext';
import {ThemeContext } from '../Components/utils/ThemeContext';



const Home = () => {

  const { dentists  } = useContext(DentistContext);
  const { theme } = useContext(ThemeContext);
  
 


  return (
    <main className={`init ${theme}`} >
      <h1>Home</h1>
      <div className={`card-grid `}>
      {dentists.map(dentist => (
         
        <Card 
           name={dentist.name}
           username={dentist.username}
           id = {dentist.id}
           set_remove_icon = {false}
           key={dentist.id}

        />
      ))}
      </div>
    </main>
  )
}

export default Home