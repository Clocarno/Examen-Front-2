import React, {useContext} from "react";
import { DentistContext } from '../Components/utils/DentistContext';
import Card from '../Components/Card'
import {ThemeContext } from '../Components/utils/ThemeContext';

//import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { data  } = useContext(DentistContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`init ${theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {data.map(dentist => (
         
         <Card 
            name={dentist.name}
            username={dentist.username}
            id = {dentist.id}
            set_remove_icon = {true}
            key={dentist.id}
 
         />
       ))}
      </div>
    </div>
  );
};

export default Favs;
