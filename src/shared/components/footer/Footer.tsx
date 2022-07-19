import styled from 'styled-components';
import { COLORS } from '../../../helper/Constants';
import { Container } from '../../styles/global';
import React from 'react';

const FooterStyled = styled.div`
  margin-top: auto;
  background-color: ${COLORS.secondary};
  color: ${COLORS.white};
  box-shadow: 0px -8px 20px rgba(0, 0, 0, 0.2);
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 0px 0px 10px 0px;
  p {
    text-shadow: 2px 2px rgba(0, 0, 0, 0.25);
    font-size: 10px;
  }
`;
const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <p>&copy; Copyright 2022, Corporation. All Rights Reserved.</p>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
