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
  // (async function getOwnReview() {
  //   if (!reviewOwn) {
  //     const ownReview = await dispatch(fetchOwnReviews());
  //     setReview(ownReview);
  //     return;
  //   } else {
  //     setReview(reviewOwn);
  //     return;
  //   }
  // })();
  const handleCloseModal = () => {
    onCloseModal();
  };
  return (
    <Modal onClose={handleCloseModal}>
      <FeedbackForm reviewOwn={review} onClose={handleCloseModal} />
    </Modal>
  );
};
