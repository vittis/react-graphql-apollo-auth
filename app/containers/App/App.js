/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/Header';
import Footer from 'components/Footer';
import routes from 'routes/routes';
import './app.module.scss';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div styleName="app-wrapper">
        <Helmet titleTemplate="%s - npd-frontend" defaultTitle="npd-frontend">
          <meta name="description" content="" />
        </Helmet>
        <Header />

        {routes}

        <Footer />
      </div>
    );
  }
}

export default App;
