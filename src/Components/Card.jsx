import React, {useContext} from "react";
import dentistImage from '../images/doctor.jpg';
import { Link } from 'react-router-dom';
import { DentistContext } from '../Components/utils/DentistContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = ({ name, username, id, set_remove_icon }) => {

  const {  addData, removeData  } = useContext(DentistContext);
  

  const addFav = (e)=>{

    e.preventDefault();
    if (name.trim() !== '') {

      addData(id, name, username);
        
    }
  }

  const remove = (e)=>{

    e.preventDefault();
    removeData(id);
    
  }



 
  return (

    
    <div className="card" >
       <Link to={`/dentist/${id}`}>
        <div>
          <img  src={dentistImage} alt="Dentist" className="card-image"/>
        </div>
        <p>{name}</p>
        <p>{username}</p>
      

        </Link>
        {
         set_remove_icon ? 
         <button onClick={remove} className="favButton"><FontAwesomeIcon className="card_star" icon={faTrash} /></button>
         : 
         <button onClick={addFav} className="favButton"><FontAwesomeIcon className="card_star" icon={faStar} /></button>
        
       
        }
    </div>
    
  );
};

export default Card;
