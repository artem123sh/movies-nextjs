import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text } from '@storybook/addon-knobs';
import ErrorView from './ErrorView';

export default {
  title: 'errors/ErrorView',
  decorators: [withKnobs],
};

// eslint-disable-next-line react/prop-types
export const Template = () => (
  <ErrorView errorLabel={text('Error Label', 'Something went wrong...')} error={text('Error', 'Error!')} />
);
