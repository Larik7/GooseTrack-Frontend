import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchOwnReviews } from 'redux/reviews/reviewOperation';
import { AddFeedbackModal } from '../AddFeedbackModal/AddFedbackModal';

export const AddFeedbackBtn = ({ feedbackBtnStyle }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleButtonClick = async () => {
    await dispatch(fetchOwnReviews());
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        className={feedbackBtnStyle}
        onClick={handleButtonClick}
        data-tour="step-1"
      >
        Feedback
      </button>
      {isModalOpen && <AddFeedbackModal onCloseModal={handleCloseModal} />}
    </div>
  );
};

export default AddFeedbackBtn;
