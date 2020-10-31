import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'basic/Button',
  argTypes: {
    onClick: { action: 'clicked' },
    onSubmit: { action: 'submitted' },
  },
  decorators: [withKnobs],
};

// eslint-disable-next-line react/prop-types
export const Template = ({ onClick, onSubmit }) => (
  <Button
    variant={radios('Variant', { Outlined: 'outlined', Contained: 'contained', None: undefined }, 'outlined')}
    size={radios('Size', { Default: undefined, Large: 'large' }, undefined)}
    onClick={onClick}
    onSubmit={onSubmit}
  >
    {text('Title', 'Button')}
  </Button>
);
