import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />

      
      <div className="container">
        <h2>Registro de Pacientes</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="form-group">
            <label htmlFor="sobrenome">Sobrenome:</label>
            <input type="text" id="sobrenome" name="sobrenome" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
          </div>
          <div className="form-group">
            <label htmlFor="numCarton">Número do Cartão do SUS:</label>
            <input type="text" id="numCarton" name="numCarton" required />
          </div>
          <div className="form-group">
            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </>
  );
}

export default App;
