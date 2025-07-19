import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icaro from '../imagens/icaro.jpg';
import beli from '../imagens/beli.png';
import marco from '../imagens/marco.png';

function Profiles() {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <img className='profile-imgs' src={beli} alt='Banner' style={{ width: '350px', margin:'30px 0 30px 0' }} />
                <b className='nomes-integrantes'>Isabeli Allgayer</b>
                </Col>
                <Col>
                <img className='profile-imgs' src={marco} alt='Banner' style={{ width: '350px', margin:'30px 0 30px 0' }} />
                <b className='nomes-integrantes'>Marco Antônio Paiva</b>
                </Col>
                <Col>
                <img className='profile-imgs' src={icaro} alt='Banner' style={{ width: '350px', borderRadius: '10%', margin:'30px 0 30px 0' }} />
                <b className='nomes-integrantes'>Tairo Pureza da Silva</b>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Profiles