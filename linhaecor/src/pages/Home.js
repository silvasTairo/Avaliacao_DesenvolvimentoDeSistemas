import React from 'react'
import Banner from '../components/Banner';
import BarraInfo from '../components/BarraInfo';
import DualBanner from '../components/DualBanner';
import ProdutosLinha from '../components/ProdutosLinha';
import ProdutosLinha2 from '../components/ProdutosLinha2';

function Home() {
  return (
    <div>
        <Banner/>
        <BarraInfo/>
        <DualBanner/>

        <div className='titulo-home-div'>
          <h2 className='titulo-home-novidades'>Confira</h2>
        </div>

        <ProdutosLinha/>

        <div className='titulo-home-div'>
          <h2 className='titulo-home-novidades'>Mais Vendidos</h2>
        </div>

        <ProdutosLinha2/>
    </div>

  )
}

export default Home