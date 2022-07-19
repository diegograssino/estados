import styled from 'styled-components';

interface Props {
  readonly primaryColor?: string;
  readonly secondaryColor?: string;
  readonly textColor?: string;
  readonly backgroundColor?: string;
  readonly borderColor?: string;
}

export const Button = styled.button<Props>`
  font-weight: 700;
  padding: 8px 12px;
  border: 2px solid
    ${(props) => props.borderColor || props.primaryColor || '#000'};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.textColor || props.primaryColor || '#000'};
  transition: 0.2s;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
  text-shadow: 2px 2px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: ${(props) => props.primaryColor || '#000'};
    color: ${(props) => props.textColor || props.secondaryColor || '#FFF'};
    border-color: ${(props) =>
      props.backgroundColor || props.primaryColor || '#000'};
  }
  &:active {
    background-color: ${(props) => props.primaryColor || 'transparent'};
    filter: brightness(125%);
  }
`;
