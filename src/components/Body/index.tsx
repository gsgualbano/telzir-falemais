import React, { useState } from 'react';

import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Animated } from 'react-animated-css';
import {
  Container,
  Box,
  SelectBox,
  Label,
  TextInput,
  Button,
  Text,
  BoxWrapper,
  TextWrapper,
  FormGroup,
} from './styles';
import BarChart from '../BarChart';

interface FormData {
  origem: string,
  destino: string,
  tempo: number,
  plano: string,
  precos: { comFaleMais: number, semFaleMais: number },
  economia: string,
}

// validação do formulário
const schema = Yup.object().shape({
  origem: Yup.string().required('DDD Origem é necessário'),
  destino: Yup.string().required('DDD Destino é necessário'),
  tempo: Yup.number()
    .typeError('Número inválido')
    .required('Necessário preencher o tempo de ligação'),
  plano: Yup.string().required('Selecione algum dos planos'),
});

/**
 * Corpo da página
 */
const Body = (props: {}) => {
  /** Hooks */
  const [showChart, setShowChart] = useState<boolean>(false); // mostrar o gráfico com os preços
  const [formData, setFormData] = useState<FormData>({
    origem: '',
    destino: '',
    tempo: 0,
    plano: '',
    precos: {
      comFaleMais: 0,
      semFaleMais: 0,
    },
    economia: '',
  });

  const locais = [
    { id: '11', title: '11' },
    { id: '16', title: '16' },
    { id: '17', title: '17' },
    { id: '18', title: '18' },
  ];

  const planos = [
    { id: 'FaleMais 30', title: 'FaleMais 30' },
    { id: 'FaleMais 60', title: 'FaleMais 60' },
    { id: 'FaleMais 120', title: 'FaleMais 120' },
  ];

  const calculaPrecos = (origem: string, destino: string, tempo: number, decrecimo: number) => {
    let comFaleMais = 0;
    let semFaleMais = 0;
    let tempoComFaleMais = tempo - decrecimo;

    // zera o tempo caso ele seja menor que o tempo limite do plano
    if (tempoComFaleMais < 0) {
      tempoComFaleMais = 0;
    }

    if (origem === '11' && destino === '16') {
      comFaleMais = 1.9 * tempoComFaleMais;
      semFaleMais = 1.9 * tempo;
    } else if (origem === '16' && destino === '11') {
      comFaleMais = 2.9 * tempoComFaleMais;
      semFaleMais = 2.9 * tempo;
    } else if (origem === '11' && destino === '17') {
      comFaleMais = 1.7 * tempoComFaleMais;
      semFaleMais = 1.7 * tempo;
    } else if (origem === '17' && destino === '11') {
      comFaleMais = 2.7 * tempoComFaleMais;
      semFaleMais = 2.7 * tempo;
    } else if (origem === '11' && destino === '18') {
      comFaleMais = 0.9 * tempoComFaleMais;
      semFaleMais = 0.9 * tempo;
    } else if (origem === '18' && destino === '11') {
      comFaleMais = 1.9 * tempoComFaleMais;
      semFaleMais = 1.9 * tempo;
    } else {
      comFaleMais = NaN;
      semFaleMais = NaN;
    }

    comFaleMais *= 1.1; // acrescimo de 10% da tarifa excedente

    return { comFaleMais, semFaleMais };
  };

  const handleSubmit = (data: any) => {
    const {
      origem,
      destino,
      tempo,
      plano,
    } = data;

    let precos = { comFaleMais: 0, semFaleMais: 0 };

    switch (plano) {
      case 'FaleMais 30':
        precos = calculaPrecos(origem, destino, tempo, 30); // FaleMais30
        break;
      case 'FaleMais 60':
        precos = calculaPrecos(origem, destino, tempo, 60); // FaleMais60
        break;
      case 'FaleMais 120':
        precos = calculaPrecos(origem, destino, tempo, 120); // FaleMais120
        break;
    }

    let economia;

    // se os dois valores não forem zero e nem NaN
    if (precos.comFaleMais && precos.semFaleMais) {
      const porcentagem = 100 - ((precos.comFaleMais / precos.semFaleMais) * 100);
      economia = `${porcentagem.toFixed(2)}%`;
    } else if (precos.comFaleMais === 0 && precos.semFaleMais !== 0) {
      economia = '100%';
    } else {
      economia = '-';
    }

    setFormData({
      origem,
      destino,
      tempo,
      plano,
      precos,
      economia,
    });

    setShowChart(!showChart);
  };

  const renderChart = (): JSX.Element => <BarChart formData={formData} isVisible={showChart} setShowChart={setShowChart} />;

  return (
    <Container>
      <TextWrapper>
        <Text>
          Com o nosso novo plano FaleMais, o cliente pode falar de graça até um determinado tempo e
          depois só paga os minutos excedentes. calcule e veja as vantagens
        </Text>
      </TextWrapper>
      <BoxWrapper>
        <Box>
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={!showChart}>
            {!showChart && (
              <Form schema={schema} onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="origem">DDD Origem</Label>
                  <SelectBox id="origem" name="origem" options={locais} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="destino">DDD Destino</Label>
                  <SelectBox id="destino" name="destino" options={locais} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="tempo">Tempo de ligação(em minutos)</Label>
                  <TextInput id="tempo" name="tempo" placeholder="" />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="plano">Plano</Label>
                  <SelectBox id="plano" name="plano" options={planos} />
                </FormGroup>
                <Button data-testid="form-button">Calcular</Button>
              </Form>
            )}
          </Animated>
          {showChart && renderChart()}
        </Box>
      </BoxWrapper>
    </Container>
  );
};

export default Body;
