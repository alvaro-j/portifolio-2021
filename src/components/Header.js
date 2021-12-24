import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Tela1 from "./Tela1"
import Contato from "./Contato"
import Formacao from "./Formacao"
import Projetos from "./Projetos"


const Header = () => {
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
						<NavLink activeClassName="link-active" to="/contato">
							<li>Contato</li>
						</NavLink>
						<NavLink activeClassName="link-active" to="/formacao">
							<li>Formação</li>
						</NavLink>
						<NavLink activeClassName="link-active" to="/projetos">
							<li>Projetos</li>
						</NavLink>
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

export default Header;
