import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import LoginForm from '../index';

const props = {
  email: '',
  password: '',
  onSubmit: jest.fn(),
  onChangeHandle: jest.fn(),
  error: false,
  loading: false,
  called: false,
};

describe('<LoginForm />', () => {
  it('should render and match snapshot', () => {
    const renderedComponent = shallow(
      <LoginForm
        email={props.email}
        password={props.password}
        onSubmit={props.onSubmit}
        onChangeHandle={props.onChangeHandle}
        error={props.error}
        loading={props.loading}
        called={props.called}
      />
    );
    expect(toJSON(renderedComponent)).toMatchSnapshot();
  });
  it('should render root component', () => {
    const renderedComponent = shallow(
      <LoginForm
        email={props.email}
        password={props.password}
        onSubmit={props.onSubmit}
        onChangeHandle={props.onChangeHandle}
        error={props.error}
        loading={props.loading}
        called={props.called}
      />
    );

    expect(renderedComponent.length).toEqual(1);
  });

  it('should render two inputs', () => {
    const renderedComponent = shallow(
      <LoginForm
        email={props.email}
        password={props.password}
        onSubmit={props.onSubmit}
        onChangeHandle={props.onChangeHandle}
        error={props.error}
        loading={props.loading}
        called={props.called}
      />
    );
    expect(renderedComponent.find('Input').length).toEqual(2);
  });

  it('should render email and password in input via props', () => {
    const renderedComponent = shallow(
      <LoginForm
        email={props.email}
        password={props.password}
        onSubmit={props.onSubmit}
        onChangeHandle={props.onChangeHandle}
        error={props.error}
        loading={props.loading}
        called={props.called}
      />
    );
    expect(
      renderedComponent
        .find('Input')
        .first()
        .props().value
    ).toEqual(props.email);
    expect(
      renderedComponent
        .find('Input')
        .last()
        .props().value
    ).toEqual(props.password);
  });
  it('should render error alert if an error occurs', () => {
    props.error = true;
    const renderedComponent = shallow(
      <LoginForm
        email={props.email}
        password={props.password}
        onSubmit={props.onSubmit}
        onChangeHandle={props.onChangeHandle}
        error={props.error}
        loading={props.loading}
        called={props.called}
      />
    );
    expect(renderedComponent.find('Alert').length).toEqual(1);
  });
  it('should render loading alert when loading', () => {
    props.error = false;
    props.loading = true;
    props.called = true;
    const renderedComponent = shallow(
      <LoginForm
        email={props.email}
        password={props.password}
        onSubmit={props.onSubmit}
        onChangeHandle={props.onChangeHandle}
        error={props.error}
        loading={props.loading}
        called={props.called}
      />
    );
    expect(renderedComponent.find('Alert').length).toEqual(1);
  });
  it('should render sucess alert when no errors occurs', () => {
    props.error = false;
    props.loading = false;
    props.called = true;
    const renderedComponent = shallow(
      <LoginForm
        email={props.email}
        password={props.password}
        onSubmit={props.onSubmit}
        onChangeHandle={props.onChangeHandle}
        error={props.error}
        loading={props.loading}
        called={props.called}
      />
    );
    expect(renderedComponent.find('Alert').length).toEqual(1);
  });
});
