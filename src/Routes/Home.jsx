import React from 'react'
import Card from '../Components/Card'
import  { useContext } from 'react';
import { DentistContext } from '../Components/utils/DentistContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { dentists } = useContext(DentistContext);
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {dentists.map(dentist => (
        <Card 
           name={dentist.name}
           username={dentist.username}
           key={dentist.id}
           
           
            
        />
      ))}
      </div>
    </main>
  )
}

export default Home