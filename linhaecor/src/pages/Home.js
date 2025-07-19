import React from 'react'
import Banner from '../components/Banner';
import BarraInfo from '../components/BarraInfo';
import DualBanner from '../components/DualBanner';

function Home() {
  return (
    <div>
        <Banner/>
        <BarraInfo/>
        <DualBanner/>

        <div className='titulo-home-div'>
          <h2 className='titulo-home-novidades'>Confira</h2>
        </div>
    </div>

  )
}

export default Home