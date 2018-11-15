import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'react-apollo';
import AuthRoute from 'modules/auth/util/AuthRouteHoc';
import './meuAprendizadoPage.module.scss';

/* eslint-disable react/prefer-stateless-function */
class MeuAprendizadoPage extends Component {
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

export default compose(AuthRoute)(MeuAprendizadoPage);
