import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardVideo from './components/cardvideo'

function App() {
  const titulo = "Titulo do vídeo"

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>Lab Tube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/> 
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;
