import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Tela1 from "./Tela1";
import Contato from "./Contato";
import Formacao from "./Formacao";
import Projetos from "./Projetos";

import { useTranslation, Trans } from "react-i18next";

import ToggleButton from "react-toggle-button";

const Header = () => {
	const [pageTitle, setPageTitle] = React.useState(document.title);

	React.useEffect(() => {
		document.title = pageTitle; //quando o componento for renderizado pelo setPageTitle, ele executa esse useEffect pra trocar o título da página
	});

	const [languageValue, setLanguageValue] = React.useState(true);
	const { i18n } = useTranslation();
	const changeLanguage = () => {
		if (i18n.language === "pt") {
			i18n.changeLanguage("en");
			setLanguageValue(!languageValue);
		} else {
			i18n.changeLanguage("pt");
			setLanguageValue(!languageValue);
		}
	};

	React.useEffect(() => {
		i18n.changeLanguage("en");
	}, [i18n]);
	return (
		<Router>
			<header className="header">
				<Link
					onClick={({ target }) => {
						setPageTitle("Portifólio - Home");
						target.parentElement.nextSibling.classList.remove("active");
					}}
					to="/"
				>
					<h1 id="logo">Álvaro</h1>
				</Link>
				<nav id="nav">
					<button
						id="btn-mobile"
						onClick={({ currentTarget }) => currentTarget.parentElement.classList.toggle("active")}
					>
						<span id="hamburguer"></span>
					</button>
					<ul className="menu">
						<NavLink
							onClick={({ target }) => {
								setPageTitle("Portifólio - Contato");
								target.parentElement.parentElement.parentElement.classList.remove("active");
							}}
							activeClassName="link-active"
							to="/contato"
						>
							<li>
								<Trans>Contact</Trans>
							</li>
						</NavLink>
						<NavLink
							onClick={({ target }) => {
								setPageTitle("Portifólio - Formação");
								target.parentElement.parentElement.parentElement.classList.remove("active");
							}}
							activeClassName="link-active"
							to="/formacao"
						>
							<li>
								<Trans>Education</Trans>
							</li>
						</NavLink>
						<NavLink
							onClick={({ target }) => {
								setPageTitle("Portifólio - Projetos");
								target.parentElement.parentElement.parentElement.classList.remove("active");
							}}
							activeClassName="link-active"
							to="/projetos"
						>
							<li>
								<Trans>Projects</Trans>
							</li>
						</NavLink>
						<span className="toggle-btn">
							<ToggleButton
								value={languageValue}
								onToggle={() => changeLanguage()}
								inactiveLabel="pt"
								activeLabel="en"
								colors={{
									active: {
										base: "rrgb(81, 81, 194)",
										hover: "rgb(177, 191, 215)",
									},
									inactive: {
										base: "rrgb(81, 81, 194)",
										hover: "rgb(177, 191, 215)",
									},
								}}
							/>
						</span>
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
