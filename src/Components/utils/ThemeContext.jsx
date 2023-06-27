import React, { createContext, useState, useReducer } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  
  const [theme, setTheme] = useState('light'); // Estado inicial del tema

  // Reducer para cambiar el tema
  const themeReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return state === 'light' ? 'dark' : 'light';
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(themeReducer, theme);

  // Función para cambiar el tema
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <ThemeContext.Provider value={{ theme: state, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;