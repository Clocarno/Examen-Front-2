import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';

export const DentistContext = createContext();

const DentistContextProvider = (props) => {
  const [dentists, setDentists] = useState([]);
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('API_ENDPOINT'); // Reemplaza 'API_ENDPOINT' con la URL de la API real
      setDentists(response.data);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  const addToFavorites = (dentist) => {
    dispatch({ type: 'ADD_FAVORITE', payload: dentist });
  };

  const removeFromFavorites = (id) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  // Reducer para manejar las tarjetas de dentistas destacados
  function favoritesReducer(state, action) {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return [...state, action.payload];
      case 'REMOVE_FAVORITE':
        return state.filter(dentist => dentist.id !== action.payload);
      default:
        return state;
    }
  }

  return (
    <DentistContext.Provider value={{ dentists, favorites, addToFavorites, removeFromFavorites }}>
      {props.children}
    </DentistContext.Provider>
  );
}

export default DentistContextProvider;

