import React from 'react';
import { Centered, Column } from '../../styles/global';
import { FcBinoculars } from 'react-icons/fc';
import styled from 'styled-components';
import { COLORS } from '../../../helper/Constants';

const NoResultsStyled = styled.div`
  h4 {
    margin-top: 58px;
    margin-bottom: 36px;
    text-align: center;
    color: ${COLORS.secondary};
  }

  .noResultIcon {
    margin-top: 36px;
    font-size: 176px;
    color: ${COLORS.primary};
  }
`;

const NoResults = () => {
  return (
    <NoResultsStyled>
      <Column>
        <Centered>
          <FcBinoculars className="noResultIcon" />
        </Centered>
        <Centered>
          <h4>Modifique los criterios de búsqueda para obtener resultados.</h4>
        </Centered>
      </Column>
    </NoResultsStyled>
  );
};

export default NoResults;
