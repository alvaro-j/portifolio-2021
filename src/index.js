import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles/global.scss";
import "./styles/header.scss";
import "./styles/introducao.scss";
import "./styles/contato.scss";
import "./styles/formacao.scss";
import "./styles/responsive.scss";

import "./translations";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
