import ReactDOM from 'react-dom';
import css from './TaskModal.module.css';

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={css.modal}>
      <div className={css.modal_content}>{children}</div>
    </div>,
    document.getElementById('modal-root')
  );
};
