import { useState } from 'react';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { Modal } from 'utils/Modal/Modal';
export const AddFeedbackModal = ({ onCloseModal }) => {
  const [redactedReview, setRedactedReview] = useState(null);
  //   const onEditReview = (id, rating, message) => {
  //     setRedactedReview({ id, rating, message });
  //     setIsRedactReview(true);
  //   };

  const handleCloseModal = () => {
    setRedactedReview(null);
    onCloseModal();
  };
  return (
    <Modal onClose={handleCloseModal}>
      <FeedbackForm
        editedRating={redactedReview ? redactedReview.rating : 0}
        editedMessage={redactedReview ? redactedReview.message : ''}
        editedId={redactedReview ? redactedReview.id : ''}
      />
    </Modal>
  );
};
