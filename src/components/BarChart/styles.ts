import styled from 'styled-components';

interface LabelProps {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
}

export const Container = styled.div``;

export const BackButton = styled.button`
  display: flex;
  color: #3C40C6;
  font-size: 18px;
  padding: 5px;
  border: none;
  outline: none;
  justify-content: space-between;
  background: #fff;
  align-items: center;

  &:hover {
    color: #242AC6;
  }
`;

export const BackButtonText = styled.span`
  margin-left: 2px;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DataGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  font-size: ${({ fontSize }: LabelProps) => (fontSize || '16px')};

  &:last-child { //ultimo
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;
  }
`;

export const Label = styled.div`
  color: ${({ color }: LabelProps) => (color || '#8b8b8b')};
  font-weight: 600;
  font-family: ${({ fontFamily }: LabelProps) => (fontFamily || "'Open Sans', sans-serif")}
`;

export const Description = styled.div`
  color: ${({ color }: LabelProps) => (color || '#000000')};
`;

export const Footer = styled.div`
  border-top: 1px solid #ebebeb;
  padding: 5px;
`;

export const Text = styled.p`
  text-align: center;
`;
