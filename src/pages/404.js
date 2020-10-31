import React from 'react';
import ErrorView from '../components/errors/ErrorView';

export default function Custom404() {
  return <ErrorView error="404" errorLabel="Page Not Found" />;
}
