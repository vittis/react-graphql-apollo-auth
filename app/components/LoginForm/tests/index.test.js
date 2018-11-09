import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from '../index';

describe('<LoginForm />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<LoginForm />);
    expect(renderedComponent.length).toEqual(1);
  });
});
