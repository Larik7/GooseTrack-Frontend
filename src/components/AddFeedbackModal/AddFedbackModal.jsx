import { useState, useEffect } from 'react';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
export const AddFeedbackModal = ({ onCloseModal }) => {
  const [redactedReview, setRedactedReview] = useState(null);
  const [isRedactReview, setIsRedactReview] = useState(false);

  //   const onEditReview = (id, rating, message) => {
  //     setRedactedReview({ id, rating, message });
  //     setIsRedactReview(true);
  //   };

  const handleCloseModal = () => {
    setRedactedReview(null);
    onCloseModal();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCloseModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  const handleRedactReview = () => setIsRedactReview(false);

  return (
    <div onMouseDown={handleBackdropClick}>
      <div>
        <button type="button" onMouseDown={handleCloseModal} />
        <FeedbackForm
          isEditReview={isRedactReview}
          editedRating={redactedReview ? redactedReview.rating : 0}
          editedMessage={redactedReview ? redactedReview.message : ''}
          editedId={redactedReview ? redactedReview.id : ''}
          handleEditReview={handleRedactReview}
        />
      </div>
    </div>
  );
};
