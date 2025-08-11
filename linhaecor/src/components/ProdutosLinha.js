import React from 'react'
import bobbieGoodsKit from '../imagens/bobbieGoodsKit.png';
import bobbiegoods from '../imagens/bobbiegoods.jpg';

function ProdutosLinha() {
  return (
    <div>
        <div className="produtos-grid-component">
            <div className="produto-card2">
                    <img src={bobbieGoodsKit} alt="Kit Capivara" className="produto-img" />
                    <b className="produto-nome">Kit Capivara</b>
                    <span className="produto-preco">R$ 78,00</span>
                    <div className="produto-desconto">
                      <span>R$ 74,01 no pix</span>
                      <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
                    </div>
            </div>
            <div className="produto-card2">
                    <img src={bobbieGoodsKit} alt="Kit Bobbie Goods" className="produto-img" />
                    <b className="produto-nome">Kit Bobbie Goods</b>
                    <span className="produto-preco">R$ 50,00</span>
                    <div className="produto-desconto">
                      <span>R$ 47,50 no pix</span>
                      <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
                    </div>
                  </div>
            <div className="produto-card2">
                    <img src={bobbiegoods} alt="Bobbie Goods" className="produto-img" />
                    <b className="produto-nome">Bobbie Goods</b>
                    <span className="produto-preco">R$ 17,00</span>
                    <div className="produto-desconto">
                      <span>R$ 16,15 no pix</span>
                      <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
                    </div>
            </div>
            <div className="produto-card2">
                    <img src={bobbiegoods} alt="Bobbie Goods" className="produto-img" />
                    <b className="produto-nome">Bobbie Goods</b>
                    <span className="produto-preco">R$ 17,00</span>
                    <div className="produto-desconto">
                      <span>R$ 16,15 no pix</span>
                      <span className="produto-desconto-label">COM 5% DE DESCONTO</span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ProdutosLinha