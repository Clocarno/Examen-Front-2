import React, { useState } from 'react';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 5 || !validateEmail(email)) {
      setErrorMessage('Por favor verifique su información nuevamente');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage(`Gracias ${name}, te contactaremos lo antes posible vía email.`);
      // Aquí puedes realizar otras acciones, como enviar los datos a un servidor
    }
  };

  const validateEmail = (email) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="form-container">
    
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
      </div>
      <div className="form-field">
        <button type="submit">Enviar</button>
      </div>
    </form>
    <div className='form_menssage'>
      {errorMessage && <div className="error"><p>{errorMessage}</p></div>}
      {successMessage && <div className="success"><p>{successMessage}</p></div>}
    </div>
  </div>
  );
};

export default Form;
