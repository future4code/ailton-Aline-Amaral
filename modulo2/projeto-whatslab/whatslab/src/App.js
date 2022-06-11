import './App.css';
import {CaixaTextoNome, CaixaTexto} from './Componentes/Componentes.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> WhatsLab </h1>
      </header>
      <section>
        <CaixaTextoNome></CaixaTextoNome>
        <CaixaTexto type="text" name="name"></CaixaTexto>
        <button>Enviar</button>
      </section>
    </div>
  );
}

export default App;
