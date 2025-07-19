import React from 'react'
import bobbieGoodsKit from '../imagens/bobbieGoodsKit.png';

function Produtos() {
  return (
    <div className="produtos-page">
      <aside className="produtos-categorias">
        <a href="/" className="produtos-voltar">Página inicial &gt; produtos</a>
        <h2 className="produtos-categorias-titulo"><i>Categories</i></h2>
          <ul className="produtos-categorias-lista">
            <li>Apontadores</li>
            <li>Aquarelas</li>
            <li>Borrachas</li>
            <li>Cadernos e Caderneta</li>
            <li>Carimbos</li>
            <li>Colas</li>
            <li>Compasso</li>
            <li>Corretivos</li>
            <li>Estojos</li>
            <li>Fichários e Acessórios</li>
            <li>Massinhas e Slimes</li>
            <li>Mochilas</li>
            <li>Pincéis Escolares</li>
            <li>Quadros e Acessórios</li>
            <li>Régua e Conjuntos</li>
            <li>Tesouras Escolares</li>
            <li>Tintas Escolares</li>
          </ul>
        </aside>
      <main className="produtos-main">
        <div className="produtos-main-header">
          <h2 className="produtos-main-titulo">Escolar</h2>
          <div className="produtos-main-cadastro">
            <b>Cadastre-se e ganhe 10% de desconto</b>
            <span>Use o cupom CADASTRO10 e aproveite</span>
          </div>
          <input className="produtos-main-email" placeholder="Digite o seu email" />
        </div>
        <div className="produtos-grid">
          {/* Repita este bloco para cada produto */}
          <div className="produto-card">
            <img src={bobbieGoodsKit} alt="Kit Capivara" className="produto-img" />
            <b className="produto-nome">Kit Capivara</b>
            <span className="produto-preco">R$ 78,00</span>
            <div className="produto-desconto">
              <span>R$ 74,01 no pix</span>
              <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
            </div>
          </div>
          <div className="produto-card">
            <img src={bobbieGoodsKit} alt="Kit Bobbie Goods" className="produto-img" />
            <b className="produto-nome">Kit Bobbie Goods</b>
            <span className="produto-preco">R$ 50,00</span>
            <div className="produto-desconto">
              <span>R$ 47,50 no pix</span>
              <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
            </div>
          </div>
          <div className="produto-card">
            <img src={bobbieGoodsKit} alt="Bobbie Goods" className="produto-img" />
            <b className="produto-nome">Bobbie Goods</b>
            <span className="produto-preco">R$ 17,00</span>
            <div className="produto-desconto">
              <span>R$ 16,15 no pix</span>
              <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
            </div>
          </div>
          <div className="produto-card">
            <img src={bobbieGoodsKit} alt="Kit Capivara" className="produto-img" />
            <b className="produto-nome">Kit Capivara</b>
            <span className="produto-preco">R$ 78,00</span>
            <div className="produto-desconto">
              <span>R$ 74,01 no pix</span>
              <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
            </div>
          </div>
          <div className="produto-card">
            <img src={bobbieGoodsKit} alt="Kit Bobbie Goods" className="produto-img" />
            <b className="produto-nome">Kit Bobbie Goods</b>
            <span className="produto-preco">R$ 50,00</span>
            <div className="produto-desconto">
              <span>R$ 47,50 no pix</span>
              <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
            </div>
          </div>
          <div className="produto-card">
            <img src={bobbieGoodsKit} alt="Bobbie Goods" className="produto-img" />
            <b className="produto-nome">Bobbie Goods</b>
            <span className="produto-preco">R$ 17,00</span>
            <div className="produto-desconto">
              <span>R$ 16,15 no pix</span>
              <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
            </div>
          </div>
          <div className="produto-card">
            <img src={bobbieGoodsKit} alt="Kit Capivara" className="produto-img" />
            <b className="produto-nome">Kit Capivara</b>
            <span className="produto-preco">R$ 78,00</span>
            <div className="produto-desconto">
              <span>R$ 74,01 no pix</span>
              <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
            </div>
          </div>
          <div className="produto-card">
            <img src={bobbieGoodsKit} alt="Kit Bobbie Goods" className="produto-img" />
            <b className="produto-nome">Kit Bobbie Goods</b>
            <span className="produto-preco">R$ 50,00</span>
            <div className="produto-desconto">
              <span>R$ 47,50 no pix</span>
              <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
            </div>
          </div>
          <div className="produto-card">
            <img src={bobbieGoodsKit} alt="Bobbie Goods" className="produto-img" />
            <b className="produto-nome">Bobbie Goods</b>
            <span className="produto-preco">R$ 17,00</span>
            <div className="produto-desconto">
              <span>R$ 16,15 no pix</span>
              <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
            </div>
          </div>
          {/* Repita os cards conforme necessário */}
        </div>
      </main>
    </div>
  )
}

export default Produtos