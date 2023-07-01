import { useState } from 'react';
import { AddFeedbackModal } from '../AddFeedbackModal/AddFedbackModal';

export const AddFeedbackBtn = ({ feedbackBtnStyle }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button className={feedbackBtnStyle} onClick={handleButtonClick} data-tour="step-1">
        Feedback
      </button>
      {isModalOpen && <AddFeedbackModal onCloseModal={handleCloseModal} />}
    </div>
  );
};

export default AddFeedbackBtn;
