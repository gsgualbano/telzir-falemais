import React from 'react';
import Header from '../components/Header';

import { shallow } from '../enzyme';

describe('<Header />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows correct data', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains('TELZIR')).toBeTruthy();
    expect(wrapper.contains('FaleMais')).toBeTruthy();
  });
});
