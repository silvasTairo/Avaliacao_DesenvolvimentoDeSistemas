import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Atendimento() {
  return (
    <div>
      <Container className='atendimento-container'>
        <Row>
          <Col>
            <b className='titulos-atendimento' >Dúvidas frequentes</b>
            <div className="duvidas-grid">
              <div className="duvida-texto">1. Quais são os horários de funcionamento?Nossa loja física abre de segunda a sexta, das 8h às 19h, e aos sábados, das 9h às 14h. O site funciona 24h por dia para pedidos online!
              </div>
              <div className="duvida-texto">
2. Como faço para comprar online?
Acesse www.papelariacolorida.com.br;
Escolha seus produtos e adicione ao carrinho;
Finalize o pedido com seus dados e forma de pagamento;
Pronto! Você receberá um e-mail com a confirmação.
</div>
              <div className="duvida-texto">3. Quais formas de pagamento vocês aceitam?
              Aceitamos:<br/>
              ✅ Cartões de crédito (em até 12x)<br/>
              ✅ Débito (PIX e transferência)<br/>
              ✅ Boleto bancário<br/>
              ✅ Dinheiro (apenas na loja física)</div>
            </div>
          </Col>
          <Col>
            <b className='titulos-atendimento'>Pesgunte aqui</b>
            <div>
              <input className='input-atendimento' type='text' placeholder='Digite sua dúvida aqui...'>
              </input>
            </div>
          </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Atendimento