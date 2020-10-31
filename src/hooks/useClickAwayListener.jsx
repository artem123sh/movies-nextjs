import { useEffect } from 'react';

const useClickAwayListener = (ref, onClickAway) => {
  useEffect(() => {
    const handleClickAway = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickAway();
      }
    };
    document.addEventListener('mousedown', handleClickAway);
    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [ref]);
};

export default useClickAwayListener;
