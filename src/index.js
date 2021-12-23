import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "./styles/global.scss";
import "./styles/introducao.scss";
import "./styles/contato.scss";
import "./styles/formacao.scss";
import "./styles/projetos.scss";
import "./styles/projeto.scss";
import "./styles/responsive.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
