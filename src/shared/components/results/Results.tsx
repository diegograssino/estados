import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../helper/Constants';
import { Button } from '../button/button';
import { FaMoneyBillAlt, FaSearchDollar } from 'react-icons/fa';

const StyledResults = styled.div`
  span {
    display: inline-block;
    width: 3em;
    color: ${COLORS.gray};
  }
  .btn-custom {
    padding: 5px 5px 0px 5px;
    &:first-child {
      margin-right: 8px;
    }
  }
  .result {
    border-bottom: 1px solid ${COLORS.gray};
    padding: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &:last-child {
      border: 0px;
    }
  }
  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Results = (props: {
  searchResults: { client: string; province: string; id: string }[];
}) => {
  return (
    <StyledResults>
      {props.searchResults.map((r, i) => {
        return (
          <div className="result" key={i}>
            <div className="left">
              <span>{r.id}</span>
              <p>{r.client.slice(0, 18) + '...'}</p>
            </div>
            <div className="right">
              <Button primaryColor={COLORS.third} className="btn-custom">
                <FaMoneyBillAlt />
              </Button>
              <Button primaryColor={COLORS.secondary} className="btn-custom">
                <FaSearchDollar />
              </Button>
            </div>
          </div>
        );
      })}
    </StyledResults>
  );
};

export default Results;
