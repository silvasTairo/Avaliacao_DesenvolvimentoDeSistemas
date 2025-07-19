import React from 'react'

function BarraInfo() {
  return (
    <div className='BarraInfo'>
        <div ><b>CUPOM 10% Off</b> <br/> <b className='primeiroCupom'>CADASTRO20</b> </div>
        <span className='divisao'/>
        <div><b>5% de Desconto</b> <br/> <b className='primeiroCupom'>NO PIX</b> </div>
        <span className='divisao'/>
        <div><b>Compra Segura</b> <br/> <b className='primeiroCupom'>Seus dados protegidos</b> </div>
        <span className='divisao'/>
        <div><b>Parcele sem juros</b> <br/> <b className='primeiroCupom'>Compras acima de R$300,00</b> </div>
    </div>
  )
}

export default BarraInfo