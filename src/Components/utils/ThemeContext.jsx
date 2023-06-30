// ThemeContext.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  theme: 'light',
};

const actionTypes = {
  CHANGE_THEME: 'CHANGE_THEME',
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const changeTheme = (newTheme) => {
    dispatch({ type: actionTypes.CHANGE_THEME, payload: newTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme: state.theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
