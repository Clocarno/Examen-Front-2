import React, { createContext, useState, useEffect, useReducer } from 'react';

import axios from 'axios';

export const DentistContext = createContext();

const DentistContextProvider = (props) => {

  
  const [dentists, setDentists] = useState([]);
  const [dentista, setDentista] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {

    fetchData();
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    }

    
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`); 
      setDentists(response.data);
     
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };


  const datosDentista = async (id) => {
    

      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        const data = response.data;
        return data
        // Realiza las operaciones necesarias con los datos
      })
      .catch((error) => {
        console.error(error);
        return
      });

     return response
  }





   const addData = (id, name, username) => {

    const existingData = data.find((item) => item.id === id);

    if (existingData) {

    console.log("La información ya existe en el local storage.");
    return;

    }
    
    const newData = [...data, { id, name, username }];
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
    alert("Se ha agregado a  " + name + " como favorito")
  
  };



  const removeData = (id) => {
   
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  };

  

  return (
    <DentistContext.Provider value={{ dentists, dentista, data, addData, removeData, datosDentista }}>
      {props.children}
    </DentistContext.Provider>
  );
}

export default DentistContextProvider;

