import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { DentistContext } from '../Components/utils/DentistContext';

import {ThemeContext } from '../Components/utils/ThemeContext';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [dentista, setDentista] = useState([]);
  const {  datosDentista } = useContext(DentistContext);

  useEffect(() => {

   // obtenerDatosDentista(id);
    (async () => {

        const data = await datosDentista(id);
        setDentista(data)
        
    })();

    
  }, []);
  
  return (
    <div className={`init ${theme}`}>
      <h1>id: {id}</h1>
      <table className="tabla-dentistas">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Web site</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>{dentista.name}</td>
            <td>{dentista.phone}</td>
            <td>
              <a href={dentista.website} target="_blank" rel="noopener noreferrer">
                {dentista.website}
              </a>
            </td>
          </tr>
        
      </tbody>
    </table>



      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail