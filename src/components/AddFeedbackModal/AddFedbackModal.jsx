import { useEffect, useState } from 'react';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { useSelector } from 'react-redux';
import { Modal } from 'utils/Modal/Modal';
import { selectOwnReviews } from 'redux/reviews/reviewSelector';

export const AddFeedbackModal = ({ onCloseModal }) => {
  const [review, setReview] = useState('');
  const reviewOwn = useSelector(selectOwnReviews);
  useEffect(() => {
    setReview(reviewOwn);
  }, [reviewOwn]);

  function handleCloseModal() {
    onCloseModal();
  }
  return (
    <Modal onClose={handleCloseModal}>
      <FeedbackForm reviewOwn={review} onClose={handleCloseModal} />
    </Modal>
  );
};
