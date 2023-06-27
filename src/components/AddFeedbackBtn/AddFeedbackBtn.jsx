import { useState } from 'react';
import { AddFeedbackModal } from '../AddFeedbackModal/AddFedbackModal';

const AddFeedbackBtn = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button className={css.feedbackBtn} onClick={handleButtonClick}>
        Feedback
      </button>
      {isModalOpen && <AddFeedbackModal onCloseModal={handleCloseModal} />}
    </div>
  );
};

export default AddFeedbackBtn;
