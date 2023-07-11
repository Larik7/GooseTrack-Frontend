import { useState, useEffect } from 'react'; // useEffect
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { Notify } from 'notiflix';
import css from './feedbackForm.module.css';
import { BiPencil as Pencil, BiTrash as Trash } from 'react-icons/bi';
import { AiFillStar as Star } from 'react-icons/ai';

import { useDispatch } from 'react-redux';

import {
  updateReview,
  addReview,
  deleteReview,
} from '../../redux/reviews/reviewOperation';

let userValidSchema = object({
  rating: string().required(),
  comment: string().required(),
});
export const FeedbackForm = ({ reviewOwn, onClose }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [hover, setHover] = useState(null);
  const [editReview, setEditReview] = useState(false);
  useEffect(() => {
    if (reviewOwn === null) {
      return;
    }
    setRating(reviewOwn.rating);
    setMessage(reviewOwn.comment);
  }, [reviewOwn]);
  const reset = () => {
    setMessage('');
    setRating(0);
    setHover(null);
    setEditReview(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const currentMessage = message;
    if (!rating) {
      Notify.failure(
        'Sorry, the rating fild cannot be empty . Please try again.'
      );
      return;
    }
    if (message.length <= 6 || !message) {
      Notify.failure('Sorry, minimal length 6 letters. Please try again.');
      return;
    }
    if (message.length >= 300 || !message) {
      Notify.failure('Sorry, maximal length 300 letters. Please try again.');
      return;
    }
    if (editReview) {
      if (reviewOwn.comment === currentMessage && reviewOwn.rating === rating) {
        return;
      }
      dispatch(updateReview({ rating, comment: message }));
      reset();
      onClose();
      return;
    }
    dispatch(addReview({ rating, comment: message }));
    reset();
    onClose();
  };
  const handleClickEdit = () => {
    setEditReview(true);
  };
  const handleClickDelete = () => {
    if (rating === 0 && message === '') {
      return;
    }
    dispatch(deleteReview());
    reset();
    onClose();
  };
  return (
    <Formik
      initialValues={{ rating, message }}
      validationSchema={userValidSchema}
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <Form className={css.feedbackForm}>
        <label className={css.feedbackFormLabel}>Rating</label>
        <div className={css.starContainerWrap}>
          {[...Array(5)].map((star, i) => {
            const ratingValue = 1 + i;
            return (
              <label key={i}>
                <Field
                  className={css.feedbackFormStarInput}
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  disabled={
                    editReview === true ||
                    reviewOwn === null ||
                    (reviewOwn.rating !== rating &&
                      reviewOwn.comment !== message)
                      ? false
                      : true
                  }
                />
                <Star
                  className={css.starBtn}
                  fill={
                    ratingValue <= (hover || rating) ? '#FFAC33' : '#CEC9C1'
                  }
                  width={24}
                  height={24}
                  disabled={
                    editReview === true ||
                    reviewOwn === null ||
                    (reviewOwn.rating !== rating &&
                      reviewOwn.comment !== message)
                      ? false
                      : true
                  }
                  style={{ marginRight: 1 }}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <div>
          <div className={css.labelandBtn}>
            <label htmlFor="FBId" className={css.feedbackFormLabel}>
              Review
            </label>
            {reviewOwn === null ||
            !reviewOwn.rating ||
            (reviewOwn.rating === rating && reviewOwn.comment === message) ? (
              <div className={css.btnWrap}>
                <Pencil className={css.editBtn} onClick={handleClickEdit} />
                <Trash
                  className={css.cancelMiniBtn}
                  onClick={handleClickDelete}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <Field
            className={css.textInput}
            type="textarea"
            as="textarea"
            required
            value={message}
            onChange={event => setMessage(event.currentTarget.value)}
            id="FBId"
            name="message"
            placeholder="Enter text"
            disabled={
              editReview === true ||
              reviewOwn === null ||
              (reviewOwn.rating !== rating && reviewOwn.comment !== message)
                ? false
                : true
            }
          />
        </div>
        {reviewOwn === null || editReview === true ? (
          <div className={css.btnWrap}>
            {editReview === true ? (
              <button
                className={css.btnSaveOrEdit}
                type="submit"
                onClick={handleSubmit}
              >
                Edit
              </button>
            ) : (
              <button
                className={css.btnSaveOrEdit}
                type="submit"
                onClick={handleSubmit}
                disabled={!rating && !message}
              >
                Save
              </button>
            )}
            <button
              className={css.btnCancel}
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <></>
        )}
      </Form>
    </Formik>
  );
};
