import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tela1 from "./components/Tela1";
import Contato from "./components/Contato";
import Formacao from "./components/Formacao";
import Projetos from "./components/Projetos";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const App = () => {
	return (
		<Router>
			<header className="header">
				<Link to="/">
					<h1 id="logo">Álvaro</h1>
				</Link>
				<nav id="nav">
					<button
						id="btn-mobile"
						onClick={({ currentTarget }) =>
							currentTarget.parentElement.classList.toggle("active")
						}
					>
						<span id="hamburguer"></span>
					</button>
					<ul className="menu">
						<Link className={window.location.pathname.includes('contato') ? 'link-active' : ""} to="/contato">
							<li>Contato</li>
						</Link>
						<Link className={window.location.pathname.includes('formacao') ? 'link-active' : ""}  to="/formacao">
							<li>Formação</li>
						</Link>
						<Link className={window.location.pathname.includes('projetos') ? 'link-active' : ""}  to="/projetos">
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
};

MySwal.fire({
	position: "top-end",
	title: "Navegue por aqui &uarr;",
	showConfirmButton: false,
	timer: 1500,
	timerProgressBar: true,
});

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
