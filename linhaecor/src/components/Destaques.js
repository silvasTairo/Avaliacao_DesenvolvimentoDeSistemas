import React from 'react'
import agendas from '../imagens/agendas.png';
import blocoNotas from '../imagens/blocoNotas.png';
import estojos from '../imagens/estojos.png';
import marcatexto from '../imagens/marca-texto.png';
import mochilas from '../imagens/mochilas.png';

function Destaques() {
  return (
    <div className='destaques-row'>
        <img src={marcatexto} alt="Marca Texto" className="destaques-img" />
        <img src={estojos} alt="Estojos" className="destaques-img" />
        <img src={agendas} alt="Agendas" className="destaques-img" />
        <img src={mochilas} alt="Mochilas" className="destaques-img" />
        <img src={blocoNotas} alt="Bloco de Notas" className="destaques-img" />
    </div>
  )
}

export default Destaques