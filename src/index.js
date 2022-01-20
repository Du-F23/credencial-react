import React from 'react';
import ReactDOM from 'react-dom';
import header from './img/utvt.png';
import logo from './img/cuervi.jpeg';
import persona from './img/persona.jpeg';
import './css/style.css';
import Credencial from './components/Credencial';


const fecha='Inscrito el 13 de Enero del 2022';

ReactDOM.render(
  <Credencial matricula='222010329' header={header} logo={logo} persona={persona} nombre='Fernando Duarte Villavicencio' grupo='DSM 53' fecha='21/10/2002' texto='Esta credencial certifica que la persona mencionada' texto2=' es estudiante de la UTVT' inscripcion={fecha}/>,
  document.getElementById('root')
);