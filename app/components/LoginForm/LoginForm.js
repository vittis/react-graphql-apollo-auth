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

// TODO: Add prop validation
/* eslint-disable react/prefer-stateless-function */
class LoginForm extends Component {
  render() {
    const { email, password } = this.props;
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
          {this.props.loading && <Alert color="info">Loading...</Alert>}
          {this.props.error && (
            <Alert color="danger">Could not login. Please try again.</Alert>
          )}

          <Button disabled={this.props.loading}>Submit</Button>
        </Form>
      </Container>
    );
  }
}
LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onSubmit: PropTypes.func,
  onChangeHandle: PropTypes.func,
  error: PropTypes.object,
  loading: PropTypes.bool,
};
export default LoginForm;
