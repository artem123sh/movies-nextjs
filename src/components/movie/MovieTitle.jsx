import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Poster = ({ posterPath, className }) => <img className={className} src={posterPath} alt="poster" />;

Poster.defaultProps = {
  className: undefined,
};

Poster.propTypes = {
  className: PropTypes.string,
  posterPath: PropTypes.string.isRequired,
};

const StyledPoster = styled(Poster)`
  height: auto;
  width: 100%;
  transition: all 500ms;
`;

export default StyledPoster;
