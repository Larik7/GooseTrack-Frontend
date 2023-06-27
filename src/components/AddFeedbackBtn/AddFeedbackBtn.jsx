import { useState } from 'react';
import { AddFeedbackModal } from '../AddFeedbackModal/AddFedbackModal';

const AddFeedbackBtn = ({ feedbackBtn }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button className={feedbackBtn} onClick={handleButtonClick}>
        Feedback
      </button>
      {isModalOpen && <AddFeedbackModal onCloseModal={handleCloseModal} />}
    </div>
  );
};

export default AddFeedbackBtn;
