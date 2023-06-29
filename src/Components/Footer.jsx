import React from 'react'
import dh_logo from '../images/DH.png';
import dentistImage from '../images/doctor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
  import { faFacebook, faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer className='fo_display'>
        <div className='fo_display'>
          <p>Powered by</p>
          <img src={dh_logo} alt='DH-logo' />
        </div>
        <div className='fo_display fo_icons'>
    
          <FontAwesomeIcon className="ico" icon={faFacebook} />
          <FontAwesomeIcon className="ico" icon={faInstagram} />
          <FontAwesomeIcon className="ico" icon={faWhatsapp} />
          <FontAwesomeIcon className="ico" icon={faTiktok} />

        </div>

    </footer>
  )
}

export default Footer
