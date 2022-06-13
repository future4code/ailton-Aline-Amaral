import './App.css';
import {Nomes, Textos} from './Componentes/Componentes.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> WhatsLab </h1>
      </header>
      <section>
        <Nomes></Nomes>
        <Textos></Textos>
        
        <button>Enviar</button>
      </section>
    </div>
  );
}

export default App;
