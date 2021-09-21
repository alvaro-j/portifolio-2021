import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tela1 from "./components/Tela1";
import Contato from "./components/Contato";
import Formacao from "./components/Formacao";
import Projetos from "./components/Projetos";

function App() {
  return (
    <Router>
      <header className="header">
        <Link to="/">
          <h1 id="logo">Álvaro</h1>
        </Link>
        <nav id='nav'>
          <button id="btn-mobile" onClick={toggleMenu}>Menu
          <span id='hamburguer'></span>
          </button>
          <ul className="menu">
            <Link to="/contato">
              <li>Contato</li>
            </Link>
            <Link to="/formacao">
              <li>Formação</li>
            </Link>
            <Link to="/projetos">
              <li>Projetos</li>
            </Link>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/" exact>
          <TelaHome />
        </Route>
        <Route path="/contato">
          <ContatoTela />
        </Route>
        <Route path="/formacao">
          <FormacaoTela />
        </Route>
        <Route path="/projetos">
          <ProjetosTela />
        </Route>
      </Switch>
    </Router>
  );
}


function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active'); //toggle = add caso não tenha, remova caso tenha
}


function TelaHome() {
  return <Tela1 />;
}
function ContatoTela() {
  return <Contato />;
}
function FormacaoTela() {
  return <Formacao />;
}
function ProjetosTela() {
  return <Projetos />;
}

export default App;
