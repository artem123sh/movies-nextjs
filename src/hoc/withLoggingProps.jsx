import React, { Component } from 'react';

export default function withLoggingProps(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      console.log('Current props: ', this.props);
    }

    render() {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrappedComponent {...this.props} />;
    }
  };
}
