import React from "react";
import dentistImage from '../images/doctor.jpg';
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
 
  
  






  return (

    <Link to={`/dentist/${id}`}>
    <div className="card" >
        <div>
          <img  src={dentistImage} alt="Dentist" className="card-image"/>
        </div>
        <p>{name}</p>
        <p>{username}</p>


        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}


        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
    </Link>
  );
};

export default Card;
