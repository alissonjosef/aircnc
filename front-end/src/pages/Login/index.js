import React, { useState} from 'react';
import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
   
    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);
    
  }

  function handleEmailChange(event){
    setEmail(event.target.value)
  }
  return (
    <>
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
        </>
    )
}