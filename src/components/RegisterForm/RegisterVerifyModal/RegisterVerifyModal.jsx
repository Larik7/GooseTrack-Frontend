import { Modal } from 'utils/Modal/Modal';
import css from './RegisterVerifyModal.module.css';

const RegisterVerifyModal = ({ onCloseModal, handleResend }) => {
  return (
    <Modal onClose={onCloseModal}>
      <h3 className={css.verify_title}>Registration Successful</h3>
      <p className={css.verify_text}>
        We have sent an activation link to your account to continue with the
        registration process. Please check your email.
      </p>
      <button
        type="button"
        onClick={handleResend}
        className={css.verify_button}
      >
        Resend Email
      </button>
    </Modal>
  );
};

export default RegisterVerifyModal;
