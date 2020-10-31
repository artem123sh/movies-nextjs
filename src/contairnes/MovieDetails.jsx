import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieDetailsView from '../components/header/MovieDetails';
import { getMovie as getMovieAction } from '../store/movie/actions';
import useDidUpdateEffect from '../hooks/useDidUpdateEffect';

const MovieDetails = ({ getMovie, movie, error }) => {
  const router = useRouter();
  const { query: { id } } = router;

  useDidUpdateEffect(() => {
    getMovie(Number(id));
    globalThis.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (error) {
      router.push('/404');
    }
  }, [error]);

  return (
    movie && (
    <MovieDetailsView
      title={movie.title}
      releaseDate={movie.release_date}
      posterPath={movie.poster_path}
      runtime={movie.runtime}
      tagline={movie.tagline}
      voteAverage={movie.vote_average}
      overview={movie.overview}
    />
    )
  );
};

MovieDetails.defaultProps = {
  error: undefined,
  movie: undefined,
};

MovieDetails.propTypes = {
  getMovie: PropTypes.func.isRequired,
  movie: PropTypes.shape(),
  error: PropTypes.shape(),
};

const mapStateToProps = (state) => {
  const { movie: { movie, error } } = state;
  return { movie, error };
};

export default connect(mapStateToProps, { getMovie: getMovieAction })(MovieDetails);
