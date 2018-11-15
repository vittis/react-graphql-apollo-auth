import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as pathNames from 'routes/pathNames';
import './homePage.module.scss';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends Component {
  render() {
    return (
      <Redirect
        to={{
          pathname: pathNames.LOGIN,
        }}
      />
    );
  }
}
