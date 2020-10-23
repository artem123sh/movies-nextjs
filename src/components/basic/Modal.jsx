import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PRIMARY, BACKGROUND } from '../../theme';
import ClickAwayListener from './ClickAwayListener';
import Title from './Title';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: 1; 
  visibility: visible; 
  backdrop-filter: blur(6px);
  z-index: 10;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${BACKGROUND};
  border: solid ${BACKGROUND};
  padding-bottom: 3rem;
  color: inherit;
  margin: 5% auto;
  border-radius: 5px;
  width: 40vw;
  z-index: 20;
  display: inline-table;
`;

const CloseButton = styled.span`
  cursor: pointer;
  border: none;
  color: inherit;
  font-size: 3rem;
  &:hover {
    color: ${PRIMARY};
  }
`;

const Header = styled.div`
  text-align: right;
`;

const ModalTitle = styled(Title)`
  margin: 0 3rem;
`;

const ModalContent = styled.div`
  overflow-y: auto;
  max-height: 70vh;
`;

const ModalBody = styled.div`
  padding-top: 2rem;
  margin: 0 3rem;
`;

const Modal = ({
  className, onClose, title, children,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <Overlay />
      <ModalContainer className={className}>
        <ClickAwayListener onClickAway={onClose}>
          <Header><CloseButton onClick={onClose}>&#x2573;</CloseButton></Header>
          <ModalContent>
            <ModalTitle>{title}</ModalTitle>
            <ModalBody>
              {children}
            </ModalBody>
          </ModalContent>
        </ClickAwayListener>
      </ModalContainer>
    </>
  );
};

Modal.defaultProps = {
  className: '',
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
