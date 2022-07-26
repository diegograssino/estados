import React, { useEffect, useState } from 'react';
import { Container } from '../shared/styles/global';
import styled from 'styled-components';
import { COLORS } from '../helper/Constants';
import { FaSearch } from 'react-icons/fa';
import NoResults from '../shared/components/noresults/NoResults';
import Results from '../shared/components/results/Results';
const SearchBar = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 0px;
  border: 0px solid ${COLORS.secondary};
  border-bottom-width: 2px;
  background-color: transparent;
  color: ${COLORS.white};
  justify-content: center;
  align-items: center;

  .searchIcon {
    font-size: 18px;
    color: ${COLORS.secondary};
    padding-top: 2px;
  }

  input {
    padding-left: 10px;
    flex-grow: 10;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
    &::placeholder {
      color: ${COLORS.gray};
    }
  }
`;

const SearchResults = styled.section`
  margin-top: 20px;
  border: 2px solid ${COLORS.secondary};
  border-radius: 8px;
  padding: 20px;
  max-height: auto;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
`;
const MainContent = () => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <main>
      <Container>
        <SearchBar>
          <FaSearch className="searchIcon" />
          <input
            placeholder="Busqueda por nombre o ID"
            onChange={(e) => setSearchValue(e.target.value)}
            autoFocus
          />
        </SearchBar>
        <SearchResults>
          {searchValue.length < 3 ? (
            <NoResults />
          ) : (
            <Results searchValue={searchValue} />
          )}
        </SearchResults>
      </Container>
    </main>
  );
};

export default MainContent;
