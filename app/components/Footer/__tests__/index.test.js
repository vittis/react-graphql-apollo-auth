import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.length).toEqual(1);
  });
});
