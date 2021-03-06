import React, { useState, useMemo } from 'react';

import camera from '../../assets/camera.svg';

import './style.css';

export default function New() {
  const [thumbnail, setThumbnail] = useState(null);
  const [ company, setCompany] = useState('');
  const [ techs, setTechs] = useState('');
  const [ price, setPrice] = useState('');

  const preview = useMemo ( () =>{
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  function handleSubmit() {

  }
  return (
    <form onSubmit={handleSubmit}>
      <label 
      id="thumbnail" 
      style={{backgroundImage: `url(${preview})`}}
      className={thumbnail ? 'has-thumbnail': ''}
      >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
        <img src={camera} alt="Select img"/>
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input 
      id="company"
      placeholder="Sua empresa incrivel"
      value={company}
      onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="techs">TECNOLOGIAS * <span>(separada por virgula)</span></label>
      <input 
      id="techs"
      placeholder="Quais tesnologias usam?"
      value={techs}
      onChange={event => setTechs(event.target.value)}
      />

      <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
      <input 
      id="price"
      placeholder="Valor cobrado por dia"
      value={price}
      onChange={event => setPrice(event.target.value)}
      />

      <button type="submit" className="btn">Cadastrar</button>
    </form>
    )
}