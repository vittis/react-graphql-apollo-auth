import React from 'react';
import { render } from 'enzyme';
// import { Redirect } from 'react-router-dom';
import LoginForm from 'components/LoginForm';
// import { createMemoryHistory } from 'history';
// import { MemoryRouter } from 'react-router';

import LoginPage from '../LoginPage';

describe('<HomePage />', () => {
  it('should render the repos list', () => {
    // const history = createMemoryHistory('/dashboard');

    const renderedComponent = render(<LoginPage />);
    console.log(renderedComponent);
    expect(renderedComponent.contains(<LoginForm />)).toEqual(true);
  });

  /* it('should render fetch the repos on mount if a username exists', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        username="Not Empty"
        onChangeUsername={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    mount(<HomePage onChangeUsername={() => {}} onSubmitForm={submitSpy} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is null', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        username=""
        onChangeUsername={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).not.toHaveBeenCalled();
  }); */

  /* describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'flexdinesh';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadRepos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadRepos());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  }); */
});
