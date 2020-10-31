import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text } from '@storybook/addon-knobs';
import MovieDetails from './MovieDetails';

export default {
  title: 'movie/MovieDetails',
  decorators: [withKnobs],
};

// eslint-disable-next-line react/prop-types
export const Template = () => (
  <MovieDetails
    title={text('Title', 'Movie Title')}
    releaseDate={text('Release Date', '2020-01-01')}
    posterPath={text('Poster Path', 'https://image.tmdb.org/t/p/w500/dfhztJRiElqmYW4kpvjYe1gENsD.jpg')}
    runtime={text('Runtime', 120)}
    voteAverage={text('Vote Average', 8.1)}
    tagline={text('Tagline', 'Tagline')}
    overview={text('Overview', 'Overview')}
  />
);
