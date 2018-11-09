import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './homePage.module.scss';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="" />
        </Helmet>
        <h1 styleName="home-label">Home</h1>
      </div>
    );
  }
}
