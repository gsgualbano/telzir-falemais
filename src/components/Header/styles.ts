import styled from 'styled-components';
import TelefoneLogo from '../../assets/logo.svg';

export const Container = styled.div`
  color: #ffffff;
  padding: 20px 10px;
`;

export const Logo = styled.div`
  display: flex;
`;

export const Text = styled.p`
  margin: 5px 0;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 0.15em;
`;

export const Title = styled.p`
  margin: 5px 0;
  font-family: 'Lobster', sans-serif;
  font-size: 60px;
  font-weight: 600;
`;

export const Icon = styled.img.attrs({
  src: TelefoneLogo,
  alt: 'telefone logo',
})`
  margin-left: 10px;
  width: 60px;
`;
