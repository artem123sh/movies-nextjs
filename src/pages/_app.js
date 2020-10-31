import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BACKGROUND_SECONDARY, TEXT_PRIMARY } from '../theme';
import Footer from '../components/footer/Footer';
import ErrorBoundary from '../components/errors/ErrorBoundary';
import wrapper from '../store';

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  height: 100%;
  background: ${BACKGROUND_SECONDARY};
  color: ${TEXT_PRIMARY};
  margin: auto;
  font-family: "Yu Gothic UI Light", sans-serif;
  border-color: ${TEXT_PRIMARY};
}

#__next {
  display: flex;
  flex-direction: column;
  height: 100%;
}

@media (min-width: 1200px) {
  body {
    padding: 0 10%;
  }
}

@media (min-width: 1920px) {
  body {
    padding: 0 20%;
  }
}
`;

const WrappedApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
    <Footer />
  </>
);

export default wrapper.withRedux(WrappedApp);
