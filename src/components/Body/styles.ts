import styled from 'styled-components';
import { Select, Input } from '@rocketseat/unform';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #fff;
  margin-bottom: 15px;
  padding: 5px;
  width: 100%;
  max-width: 520px;
`;

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  @media(max-width: 768px) { /* Telas de IPAD ou menores */
   flex: 1; // usar o 100% do espaço disponível
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px 15px;
  width: 100%;
  max-width: 520px;
  
  @media(max-width: 768px) { /* Telas de IPAD ou menores */
    border-radius: 10px 10px 0 0; // borda somente nas pontas superiores
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & span {
    color: red;
  }
`;

export const SelectBox = styled(Select)`
  background: #ebebeb;
  border-radius: 5px;
  border: none;
  padding: 10px;
  outline: none;
`;

export const TextInput = styled(Input).attrs({
  type: 'number',
})`
  background: #ebebeb;
  border-radius: 5px;
  border: none;
  padding: 10px;
  outline: none;
`;

export const Label = styled.label`
  color: #8B8B8B;
  margin-bottom: 5px;
  font-weight: 600;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  background: #3C40C6;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: color 400ms, background-color 400ms;

  &:hover {
    background: #242AC6;
  }
`;
