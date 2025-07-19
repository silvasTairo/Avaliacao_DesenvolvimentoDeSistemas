import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../imagens/logo.png';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line
import Home from '../pages/Home.js';

function Header() {
   const navigate = useNavigate();
  return (
    <>
      <div className='desconto-topo'>
        Em até 6x sem juros no cartão  /  Use o Cupom PRIMEIRACOMPRA e ganhe 5% OFF na sua primeira compra.
      </div>
      <Container fluid className='header' style={{ height: '100px' }}>
        <Row>


          <Col xs={3} className='coluna-header'>
            <div onClick={() => navigate('/')}>
              <img className='logoImg' src={logo} alt='Logo'/>
            </div>
            <h2 className='nome-estudio' onClick={() => navigate('/')}>Estudio Linha e Cor</h2>
          </Col>
          

          <Col className='coluna-header' xs={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0' }}>
            <input className='barraPesquisa' placeholder='Pesquise aqui . . .' />
            <svg onClick={() => navigate('/Produtos')} className='lupa' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </Col>


          <Col className='coluna-header3' xs={4} style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '15px',}}><b onClick={() => navigate('/Atendimento')} className='textosHeader-first'>Central de</b><br /><b onClick={() => navigate('/Atendimento')} className='textosHeader'>Atendimento</b></div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '15px' }}><b onClick={() => navigate('/Sobre-Nos')} className='textosHeader-first'>Quem somos?</b><br /><b onClick={() => navigate('/Sobre-Nos')} className='textosHeader'>Clique aqui</b></div>
            </div>
            <svg className='Cart' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
          </Col>


        </Row>
      </Container>
      <div className='finalHeader'>
        <b className='linkCategoria' >Todas as Categorias</b>
        <b className='linkCategoria'  onClick={() => navigate('/Produtos')}>Escolar</b>
        <b className='linkCategoria' >Escrita</b>
        <b className='linkCategoria' >Organização</b>
        <b className='linkCategoria' >Artes</b>
        <b className='linkCategoria' >Papéis</b>
      </div>
    </>
  )
}

export default Header