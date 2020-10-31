import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import noPoster from './noposter.jpg';

const StyledImage = styled.img`
  height: auto;
  width: 100%;
`;

const Poster = ({ posterPath, className }) => (
  <div className={className}>
    <StyledImage src={posterPath || noPoster} alt="poster" onError={(e) => { e.target.src = noPoster; }} />
  </div>
);

Poster.defaultProps = {
  className: undefined,
};

Poster.propTypes = {
  className: PropTypes.string,
  posterPath: PropTypes.string.isRequired,
};

export default Poster;
