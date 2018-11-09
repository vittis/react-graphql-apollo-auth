import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './meuAprendizadoPage.module.scss';

/* eslint-disable react/prefer-stateless-function */
export default class MeuAprendizadoPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Meu Aprendizado</title>
          <meta name="description" content="" />
        </Helmet>
        <h1 styleName="meuAprendizado-label">Meu Aprendizado</h1>
      </div>
    );
  }
}
