import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BtnCloseModal } from './Modal.steled';
import css from './modal.module.css';

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
    <div className={css.modalBackdrop} onMouseDown={handleClose}>
      <div className={css.modalContainer}>
        <BtnCloseModal onClick={onClose} />
        {children}
      </div>
    </div>,
    rootModal
  );
};
