import logo from './logo.svg';
import './App.css';
import {Login} from './componentes/componentes';
import axios from "axios";

function App() {
  
  state = {
    Cadastro: [],
    InputNome:"",
    InputEmail:""
  }

  onChangeInputNome = (event) => {
    this.setState({InputNome: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({InputEmail: event.target.value})
  }

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "aline-amaral-ailton"
          }
        }
      )
      .then((response) => {
        alert();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Login></Login>
    </div>
  );
}

export default App;
