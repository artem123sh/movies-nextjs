import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Logo from '../basic/Logo';
import background from './background.png';
import Poster from '../movie/Poster';
import { PRIMARY } from '../../theme';

const Title = styled.span`
  font-size: 4rem;
  opacity: 0.8;
`;

const MovieDetailsContainer = styled.header`
  flex-grow: 1;
  display: flex;
  margin-bottom: 1rem;
  padding: 5rem 5% 3rem 5%;
  position: relative;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.9)
  ), url(${background});
  background-size: 110%;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 1rem; 
  left: 5%;
  z-index: 15;
`;

const SearchIcon = styled.span`
  position: absolute;
  font-size: 3rem;
  color: ${PRIMARY};
  top: 0; 
  right: 5%;
  transform: rotate(45deg);
`;

const StyledPoster = styled(Poster)`
  top: 15%;
  left: 5%;
  flex-grow: 1;
  min-width: 20rem;
  max-width: 25rem;
`;

const Rating = styled.span`
  border: solid 1px white;
  margin: 0 2rem;
  border-radius: 50%;
  font-size: 2rem;
  min-width: 4rem;
  max-width: 4rem;
  text-align: center;
  line-height: 4rem;
  color:  ${({ voteAverage }) => {
    switch (Math.round(voteAverage / 3)) {
      case (3):
        return 'lightgreen';
      case (2):
        return 'inherit';
      case (1):
      default:
        return 'lightcoral';
    }
  }};
`;

const MovieTextDetails = styled.p`
  margin: 1.5rem 0;
  opacity: 0.8;
`;

const PrimaryMovieDetails = styled.p`
  color: ${PRIMARY};
  font-size: 2rem;
  margin: 0 3rem 0 0;
`;

const MovieDetailsRightPanel = styled.div`
  padding: 1% 5%;
  height: 100%;
  flex-grow: 1;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
`;

const MovieDetails = ({
  title, releaseDate, posterPath, runtime, voteAverage, tagline, overview,
}) => (
  <MovieDetailsContainer>
    <LogoContainer><Logo /></LogoContainer>
    <Link href="/"><SearchIcon>&#9906;</SearchIcon></Link>
    <StyledPoster posterPath={posterPath} />
    <MovieDetailsRightPanel>
      <Section>
        <Title>{title}</Title>
        <Rating voteAverage={voteAverage}>{voteAverage || '0.0'}</Rating>
      </Section>
      <MovieTextDetails>{tagline}</MovieTextDetails>
      <Section>
        <PrimaryMovieDetails>{new Date(releaseDate).getFullYear()}</PrimaryMovieDetails>
        <PrimaryMovieDetails>
          {runtime}
          {' mins'}
        </PrimaryMovieDetails>
      </Section>
      <MovieTextDetails>{overview}</MovieTextDetails>
    </MovieDetailsRightPanel>
  </MovieDetailsContainer>
);

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
};

export default MovieDetails;
