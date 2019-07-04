import React from 'react';
import { act } from 'react-dom/test-utils';
import Body from '../components/Body';

import { shallow } from '../enzyme';

describe('<Body />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Body />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows correct data', () => {
    const wrapper = shallow(<Body />);
    expect(wrapper.find('#origem').length).toEqual(1);
    expect(wrapper.contains('DDD Origem')).toBeTruthy();
    expect(wrapper.find('#destino').length).toEqual(1);
    expect(wrapper.contains('DDD Destino')).toBeTruthy();
    expect(wrapper.find('#tempo').length).toEqual(1);
    expect(wrapper.contains('Tempo de ligação(em minutos)')).toBeTruthy();
    expect(wrapper.find('#plano').length).toEqual(1);
    expect(wrapper.contains('Plano')).toBeTruthy();
  });
});
