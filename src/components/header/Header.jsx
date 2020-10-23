import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../basic/Logo';
import Button from '../basic/Button';
import Title from '../basic/Title';
import background from './background.png';
import { FOOTER_BACKGROUND } from '../../theme';

const StyledTitle = styled(Title)`
  position: absolute;
  top: 25%;
  left: 10%;
`;

const StyledHeader = styled.header`
  flex: 1;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.7)
  ), url(${background});
  background-size: 110%;
  margin-bottom: 1rem;
`;

const StyledContainer = styled.div`
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  position: relative;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 1rem; 
  left: 5%;
  z-index: 15;
`;

const SearchMovieInput = styled.input`
  height: 1.5rem;
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  background: ${FOOTER_BACKGROUND};
  opacity: 0.7;
  font-size: 1.5rem;
  color: inherit;
`;

const SearchButton = styled(Button)`
  margin: 0 0.5rem;
`;

const AddMovieButton = styled(Button)`
  position: absolute;
  top: 5%;
  right: 5%;
`;

const Header = ({
  toggleAddMovieModal, search, handleSearchChange, handleSearch,
}) => {
  const onEnterDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <LogoContainer><Logo /></LogoContainer>
        <AddMovieButton onClick={toggleAddMovieModal}>+ Add Movie</AddMovieButton>
        <StyledTitle>Find your movie</StyledTitle>
        <SearchMovieInput placeholder="What do you want to watch?" value={search} onChange={handleSearchChange} onKeyDown={onEnterDown} />
        <SearchButton size="large" variant="contained" onClick={handleSearch}>Search</SearchButton>
      </StyledContainer>
    </StyledHeader>
  );
};

Header.propTypes = {
  toggleAddMovieModal: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default Header;
