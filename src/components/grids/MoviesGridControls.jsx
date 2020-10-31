import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Select from '../basic/Select';
import Tab from '../basic/UnderlinedTab';
import { BACKGROUND_SECONDARY } from '../../theme';

const Container = styled.div`
  border-bottom: solid 2px ${BACKGROUND_SECONDARY};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.span`
  padding: 1rem 1rem;
  text-transform: uppercase;
  opacity: 0.5;
  font-size: 1rem;
`;

const StyledSelect = styled(Select)`
  height: 3rem;
`;

const StyledTab = styled(Tab)`
  padding: 1rem 0;
  margin-right: 2rem;
  margin-bottom: -4px;
`;

export const filters = {
  '': 'All',
  documentary: 'Documentary',
  comedy: 'Comedy',
  horror: 'Horror',
  crime: 'Crime',
};

export const sortOptions = {
  release_date: 'Release Date',
  vote_average: 'Raiting',
};

const GridControls = ({
  filter, sortBy, handleFilterChange, handleSortChange,
}) => (
  <Container>
    <div>
      {Object.entries(filters).map(([key, value]) => (
        <StyledTab
          key={key}
          selected={key === filter}
          onClick={() => handleFilterChange(key)}
        >
          {value}
        </StyledTab>
      ))}
    </div>
    <FilterContainer>
      <FilterLabel>Sort By</FilterLabel>
      <StyledSelect value={sortBy} options={sortOptions} onChange={handleSortChange} />
    </FilterContainer>
  </Container>
);

GridControls.propTypes = {
  filter: PropTypes.oneOf(['', 'documentary', 'comedy', 'horror', 'crime']).isRequired,
  sortBy: PropTypes.oneOf(['vote_average', 'release_date']).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default GridControls;
