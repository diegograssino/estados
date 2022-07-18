import React from 'react';
import { Container, Spacer, Row } from '../styles/global';
import { COLORS } from '../../helper/Constants';
import styled from 'styled-components';

const Navbar = () => {
  const Nav = styled.nav`
    background-color: ${COLORS.third};
    color: ${COLORS.white};
    margin-bottom: 20px;
    border-width: 0px 0px 5px 0px;
    border-style: solid;
    border-color: ${COLORS.secondary};
  `;
  return (
    <Nav>
      <Container>
        <Row>
          <h3>Logo</h3>
          <Spacer />
          <button>Login</button>
        </Row>
      </Container>
    </Nav>
  );
};

export default Navbar;
