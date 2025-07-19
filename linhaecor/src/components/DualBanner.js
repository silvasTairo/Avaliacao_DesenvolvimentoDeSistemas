import React from 'react'
import Planners from '../imagens/Planners.png';
import Canetas from '../imagens/Canetas.png';

function DualBanner() {
  return (
    <div>
        <div className="banner-container">
            <img src={Planners} alt='Banner' style={{ width: '40%' }} />
            <img src={Canetas} alt='Banner' style={{ width: '40%' }} />
        </div>
    </div>
  )
}

export default DualBanner