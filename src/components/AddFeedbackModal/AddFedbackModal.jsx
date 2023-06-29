import { useState, useEffect } from 'react';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwnReviews } from 'redux/reviews/reviewOperation';
import { Modal } from 'utils/Modal/Modal';
import { selectOwnReviews } from 'redux/reviews/reviewSelector';
export const AddFeedbackModal = ({ onCloseModal }) => {
  const [review, setReview] = useState({});
  const dispatch = useDispatch();
  const reviewOwn = useSelector(selectOwnReviews);
  useEffect(() => {
    if (!reviewOwn) {
      const ownReview = dispatch(fetchOwnReviews());
      setReview(ownReview);
      return;
    } else {
      setReview(reviewOwn);
      return;
    }
  }, [reviewOwn, review]);
  function handleCloseModal() {
    onCloseModal();
  }
  return (
    <Modal onClose={handleCloseModal}>
      <FeedbackForm reviewOwn={review} onClose={handleCloseModal} />
    </Modal>
  );
};
