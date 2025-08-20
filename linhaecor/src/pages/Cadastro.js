import React from 'react'
import logoEscura from '../imagens/logoEscura.png';

function Cadastro() {
  return (
    <div className="cadastro-bg">
      <div className="cadastro-container">
        <div className="cadastro-form-side">
          <div className="cadastro-form-box">
            <h1 className="cadastro-titulo">Cadastro</h1>
            <span className="cadastro-subtitulo">preencha suas informações</span>
            <form>
              <input className="cadastro-input" type="text" placeholder="Nome" />
              <input className="cadastro-input" type="email" placeholder="E-mail" />
              <input className="cadastro-input" type="password" placeholder="Senha" />
              <span className="cadastro-link">Esqueceu a senha?</span>
              <button className="cadastro-btn" type="submit"><b>Cadastro</b></button>
            </form>
          </div>
        </div>
        <div className="cadastro-img-side">
          <div className="cadastro-img-box">
            <div className="cadastro-bemvindo-row">
              <img src={logoEscura} alt="Decorativo" className="cadastro-bemvindo-img" />
              <div>
                <h1 className="cadastro-bemvindo">Bem Vindo(a) ao</h1>
                <h2 className="cadastro-estudio">Estúdio Linha e Cor</h2>
              </div>
            </div>
            <div className="cadastro-imgs">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro