import React from 'react';
import { Container, Spacer, Row, Centered } from '../../styles/global';
import { Button } from '../button/button';
import { COLORS } from '../../../helper/Constants';
import { FaUserCircle, FaAngleRight, FaDollarSign } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarStyled = styled.nav`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  margin-bottom: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  height: auto;
  span {
    font-size: 12px;
  }
  .iconSize22 {
    font-size: 22px;
    /* margin-left: 22px; */
  }
  .centeredWidth3 {
    width: 4em;
  }
  .margin-left {
    margin-left: 12px;
  }
`;
const Navbar = () => {
  return (
    <NavbarStyled>
      <Container>
        <Row>
          <h3>Logo</h3>
          <Spacer />
          <Button
            primaryColor={COLORS.third}
            textColor={COLORS.white}
            borderColor={COLORS.white}
            className="margin-left"
          >
            <Centered className="centeredWidth3">
              <FaDollarSign className="iconSize22" />
              <Spacer />
              <FaAngleRight />
            </Centered>
          </Button>
          <Button
            primaryColor={COLORS.secondary}
            textColor={COLORS.white}
            borderColor={COLORS.white}
            className="margin-left"
          >
            <Centered className="centeredWidth3">
              <FaUserCircle className="iconSize22" />
              <Spacer />
              <FaAngleRight />
            </Centered>
          </Button>
        </Row>
      </Container>
    </NavbarStyled>
  );
};

export default Navbar;
