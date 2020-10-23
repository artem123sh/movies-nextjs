import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useClickAwayListener from '../../hooks/useClickAwayListener';

const ClickAwayListener = ({ children, onClickAway }) => {
  const wrapperRef = useRef(null);
  useClickAwayListener(wrapperRef, onClickAway);

  return <div ref={wrapperRef}>{children}</div>;
};

ClickAwayListener.propTypes = {
  children: PropTypes.node.isRequired,
  onClickAway: PropTypes.func.isRequired,
};

export default ClickAwayListener;
