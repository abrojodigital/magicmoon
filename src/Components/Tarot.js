import React, { useState, useEffect } from 'react';
import tarot from '../Data/tarot.json';

function Tarot() {
  const [prediccionPasado, setPrediccionPasado] = useState({});
  const [prediccionPresente, setPrediccionPresente] = useState({});
  const [prediccionFuturo, setPrediccionFuturo] = useState({});

  const sortearPrediccion = () => {
    let numero = Math.floor(Math.random() * tarot.length);
    setPrediccionPasado(tarot[numero]);
    numero = Math.floor(Math.random() * tarot.length);
    setPrediccionPresente(tarot[numero]);
    numero = Math.floor(Math.random() * tarot.length);
    setPrediccionFuturo(tarot[numero]);
  }

  useEffect(() => {
    sortearPrediccion();
  }
    , [])

  return (
    <div className='container'>
      <div className='row border-bottom'>
        <div className='col'>
          <h2 className='text-center'>Past</h2>
          <img src={prediccionPasado.image} alt='tarot' className='img-fluid' />
          <h5>{prediccionPasado.name}</h5>
          <p>Upright: {prediccionPasado.upright}</p>
          <p>Reversed: {prediccionPasado.reversed}</p>
        </div>
        <div className='col'>
          <h2 className='text-center'>Present</h2>
          <img src={prediccionPresente.image} alt='tarot' className='img-fluid' />
          <h5 >{prediccionPresente.name}</h5>
          <p>Upright: {prediccionPresente.upright}</p>
          <p>Reversed: {prediccionPresente.reversed}</p>
        </div>
        <div className='col'>
          <h2 className='text-center'>Future</h2>
          <img src={prediccionFuturo.image} alt='tarot' className='img-fluid' />
          <h5>{prediccionPresente.name}</h5>
          <p>Upright: {prediccionFuturo.upright}</p>
          <p>Reversed: {prediccionFuturo.reversed}</p>
        </div>
      </div>
      <div className='row border-bottom mt-3'>
        <h3>Past</h3>
        <h5>Summary</h5>
        <p>{prediccionPasado.summary}</p>
        <h5>Meaning</h5>
        <p>{prediccionPasado.full_meaning}</p>
      </div>
      <div className='row border-bottom mt-3'>
        <h3>Present</h3>
        <h5>Summary</h5>
        <p>{prediccionPresente.summary}</p>
        <h5>Meaning</h5>
        <p>{prediccionPresente.full_meaning}</p>
      </div>
      <div className='row mt-3'>
        <h3>Future</h3>
        <h5>Summary</h5>
        <p>{prediccionFuturo.summary}</p>
        <h5>Meaning</h5>
        <p>{prediccionFuturo.full_meaning}</p>
      </div>
      </div>
  );
}

export default Tarot;