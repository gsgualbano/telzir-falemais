import React from 'react';
import BarChart from '../components/BarChart';

import 'jest-dom/extend-expect';
import { shallow } from '../enzyme';

describe('<BarChart />', () => {
  const props = {
    formData: {
      origem: '11',
      destino: '18',
      tempo: 80,
      precos: { comFaleMais: 40.28, semFaleMais: 60.40 },
      plano: 'FaleMais 30',
      economia: '80%',
    },
    isVisible: true,
    setShowChart: () => { },
  };

  it('renders correctly', () => {
    const wrapper = shallow(<BarChart {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows correct data', () => {
    const wrapper = shallow(<BarChart {...props} />);
    expect(wrapper.find("[data-testid='origem']").text()).toEqual('11');
    expect(wrapper.find("[data-testid='destino']").text()).toEqual('18');
    expect(wrapper.find("[data-testid='tempo']").text()).toEqual('80 minutos');
    expect(wrapper.find("[data-testid='comFaleMais']").text()).toEqual('R$ 40.28');
    expect(wrapper.find("[data-testid='semFaleMais']").text()).toEqual('R$ 60.40');
    expect(wrapper.find("[data-testid='plano']").text()).toEqual('FaleMais 30');
    expect(wrapper.find("[data-testid='economia']").text()).toEqual('80%');
  });

  it('shows correct data when passing undefined props', () => {
    const propsUndefined = {
      formData: {
        origem: '18',
        destino: '17',
        tempo: 10,
        precos: { comFaleMais: NaN, semFaleMais: NaN },
        plano: 'FaleMais 120',
        economia: '-',
      },
      isVisible: true,
      setShowChart: () => { },
    };

    const wrapper = shallow(<BarChart {...propsUndefined} />);
    expect(wrapper.find("[data-testid='origem']").text()).toEqual('18');
    expect(wrapper.find("[data-testid='destino']").text()).toEqual('17');
    expect(wrapper.find("[data-testid='tempo']").text()).toEqual('10 minutos');
    expect(wrapper.find("[data-testid='comFaleMais']").text()).toEqual('R$ -');
    expect(wrapper.find("[data-testid='semFaleMais']").text()).toEqual('R$ -');
    expect(wrapper.find("[data-testid='plano']").text()).toEqual('FaleMais 120');
    expect(wrapper.find("[data-testid='economia']").text()).toEqual('-');
  });
});
