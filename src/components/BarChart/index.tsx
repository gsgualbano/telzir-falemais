import React from 'react';

import Chart from 'react-apexcharts';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Animated } from 'react-animated-css';

import {
  Container, Data, Label, Description, DataGroup, Text, Footer, BackButton, BackButtonText,
} from './styles';


interface OwnProps {
  /** Dados que vem do formulário no Body como origem, destino, tempo, plano, preços, economia */
  formData: {
    origem: string,
    destino: string,
    tempo: number,
    plano: string,
    precos: { comFaleMais: number, semFaleMais: number },
    economia: string,
  },
  /** Valor booleano para que indica se o componente está visível ou não */
  isVisible: boolean,
  /** Função dispatch que atualizar o valor booleano do IsVisible */
  setShowChart: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Gráfico em Barra e dados sobre as tarifas
 */
const BarChart = ({ formData, isVisible, setShowChart }: OwnProps) => {
  const {
    origem,
    destino,
    tempo,
    plano,
    precos,
    economia,
  } = formData;

  const colors = ['#00E396', '#FF0000'];

  /** Configurações do gráfico */
  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {},
    },
    colors,
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Com FaleMais', 'Sem FaleMais'],
      labels: {
        style: {
          colors,
          fontSize: '14px',
        },
      },
    },
  };

  /** Valores do gráfico */
  const series = [
    {
      name: 'Preço R$',
      data: [Number(precos.comFaleMais.toFixed(2)), Number(precos.semFaleMais.toFixed(2))],
    },
  ];

  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
      <Container>
        <BackButton onClick={() => setShowChart(false)}>
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
          <BackButtonText>voltar</BackButtonText>
        </BackButton>
        <Data>
          <DataGroup>
            <Label>DDD Origem:</Label>
            <Description data-testid="origem">{origem}</Description>
          </DataGroup>
          <DataGroup>
            <Label>DDD Destino:</Label>
            <Description data-testid="destino">{destino}</Description>
          </DataGroup>
          <DataGroup>
            <Label>Tempo:</Label>
            <Description data-testid="tempo">{`${tempo} minutos`}</Description>
          </DataGroup>
          <DataGroup>
            <Label>Plano:</Label>
            <Description data-testid="plano">{plano}</Description>
          </DataGroup>
          <DataGroup fontSize="25px">
            <Label color="#00E396" fontFamily="Lobster">FaleMais:</Label>
            <Description data-testid="comFaleMais" color="#00E396">
              {`R$ ${!Number.isNaN(precos.comFaleMais) ? precos.comFaleMais.toFixed(2) : '-'}`}
            </Description>
          </DataGroup>
          <DataGroup>
            <Label color="#ff0000">Sem FaleMais:</Label>
            <Description data-testid="semFaleMais" color="#ff0000">
              {`R$ ${!Number.isNaN(precos.semFaleMais) ? precos.semFaleMais.toFixed(2) : '-'}`}
            </Description>
          </DataGroup>
        </Data>
        <Chart options={options} series={series} type="bar" width="100%" />
        <Footer>
          <Text>
            Com o FaleMais você economiza:
            <span style={{ color: '#00E396' }} data-testid="economia">{economia}</span>
          </Text>
        </Footer>
      </Container>
    </Animated>
  );
};

export default BarChart;
