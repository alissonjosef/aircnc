import React, { useState } from 'react'
import api from './services/api';
import './App.css';
import logo from './assets/Logo.svg'

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
   
    const response = await api.post('/sessions', {
      email
    });

    console.log('response');
    
  }

  function handleEmailChange(event){
    setEmail(event.target.value)
  }
  return (
    <div className="container">
      <img src={logo} alt="Correiaoutlet"/>

      <div className="content">
        <p>
          Encontre a sua <strong>melhor</strong> forma de <strong>vestir</strong> com a melhor que ta tendo.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input type="email"
           id="email" 
           placeholder="Seu melhor e-mail"
           value={email}
           onChange={handleEmailChange}
           />

           <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
