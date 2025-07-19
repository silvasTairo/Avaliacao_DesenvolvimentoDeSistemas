import React from 'react'
import Banner from '../components/Banner'
import investidores from '../imagens/investidores.png'

function Parceiros() {
  return (
    <div className='container-parceiros'>
      <Banner/>
      <h1 className='titulo-parceiros'>Parceiros</h1>
      <img src={investidores} alt='Banner' style={{ width: '70%', margin:'30px 0 30px 0' }} />
    </div>
  )
}

export default Parceiros