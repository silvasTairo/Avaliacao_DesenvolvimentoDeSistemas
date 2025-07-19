import React from 'react'
import Banner from '../components/Banner';
import Profiles from '../components/Profiles';

function SobreNos() {
  return (
    <div className='sobre-nos-flex'>
      <div className='container-parceiros'>
      <Banner/>
      <div className='container-texto-sobre-nos'>
        <b className='titulo-sobre-nos'>Quem somos nós?</b>
        <b className='texto-sobre-nos'>No Estúdio Linha e Cor, acreditamos que cada detalhe faz a diferença. Somos uma papelaria dedicada a oferecer produtos que inspiram criatividade, organização e expressão pessoal. Nosso nome representa a essência do que fazemos: a linha, que simboliza a precisão e a estrutura, e a cor, que traz vida, emoção e personalidade ao cotidiano.

        Valorizamos a criatividade e acreditamos que, com a combinação certa de linha e cor, qualquer projeto pode ganhar forma e significado. Por isso, selecionamos cuidadosamente nossos produtos, buscando inovação e diversidade para atender às mais variadas necessidades.</b>
      </div>
      
      <Profiles/>
    </div>
    </div>
  )
}

export default SobreNos