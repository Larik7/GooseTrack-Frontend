import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const rootModal = document.querySelector('#modal');

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === `Escape`) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div onMouseDown={handleClose}>
      <div>
        <button type="button" onClick={onClose}></button>
        {children}
      </div>
    </div>,
    rootModal
  );
};
