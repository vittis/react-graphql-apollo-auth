import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from 'reactstrap';
import './loginForm.module.scss';

/* eslint-disable react/prefer-stateless-function */
class LoginForm extends Component {
  render() {
    const { email, password, error, loading, called } = this.props;

    const shouldRenderLoadingAlert = loading && called;
    const shouldRenderErrorAlert = error;
    const shouldRenderSucessAlert = called && !loading && !error;

    return (
      <Container styleName="App">
        <h2>Sign In</h2>
        <Form styleName="form" onSubmit={e => this.props.onSubmit(e)}>
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                required
                type="text"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={email}
                onChange={e => {
                  this.props.onChangeHandle(e);
                }}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                required
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={password}
                onChange={e => this.props.onChangeHandle(e)}
              />
            </FormGroup>
          </Col>

          {shouldRenderLoadingAlert && <Alert color="info">Loading...</Alert>}
          {shouldRenderErrorAlert && (
            <Alert color="danger">Could not login. Please try again.</Alert>
          )}
          {shouldRenderSucessAlert && (
            <Alert color="sucess">Sucess! You should be redirected soon.</Alert>
          )}

          <Button disabled={this.props.loading}>Submit</Button>
        </Form>
      </Container>
    );
  }
}
LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  called: PropTypes.bool.isRequired,
};
export default LoginForm;
