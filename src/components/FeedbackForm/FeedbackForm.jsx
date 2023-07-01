import { useState } from 'react'; // useEffect
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import css from './feedbackForm.module.css';
import { BiPencil as Pencil, BiTrash as Trash } from 'react-icons/bi';
import { AiFillStar as Star } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid'; // якщо не використовуєш краще в комент заганяй.
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
  const { _id: idUser } = reviewOwn;
  const dispatch = useDispatch();
  const [rating, setRating] = useState(reviewOwn.rating || 0);
  const [message, setMessage] = useState(reviewOwn.comment || '');
  const [hover, setHover] = useState(null);
  const [id] = useState(idUser || ''); // const [id, setID] = useState(idUser || ''); тут 'setID' is assigned a value but never used;
  const [editReview, setEditReview] = useState(false);
  // useEffect(() => {
  //   // if (isEditReview) {
  //   //   setRating(editedRating);
  //   //   setMessage(editedMessage);
  //   //   setId(editedId);
  //   // }
  // }, [editedMessage, editedRating, editedId]);
  const reset = () => {
    setMessage('');
    setRating(0);
    setHover(null);
    setEditReview(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(11);
    const currentMessage = e.currentTarget.message.value;
    if (!rating) {
      return;
    }
    if (message.length <= 6) {
      return;
    }
    if (message.length >= 300) {
      return;
    }
    if (editReview) {
      if (reviewOwn.comment === currentMessage && reviewOwn.rating === rating) {
        return;
      }
      dispatch(updateReview(id, { rating, comment: message }));
      reset();
      onClose();
    } else {
      dispatch(addReview({ rating, comment: message }));
      reset();
      onClose();
    }
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
      onSubmit={handleSubmit}
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
                />
                <Star
                  className={css.starBtn}
                  fill={
                    ratingValue <= (hover || rating) ? '#FFAC33' : '#CEC9C1'
                  }
                  width={24}
                  height={24}
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
            {!reviewOwn.rating ? (
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
            type="text"
            required
            value={message}
            onChange={event => setMessage(event.currentTarget.value)}
            id="FBId"
            name="message"
            placeholder="Enter text"
          />
        </div>
        <div className={css.btnWrap}>
          {reviewOwn.rating === rating && reviewOwn.comment === message ? (
            <button className={css.btnSaveOrEdit} type="button">
              Edit
            </button>
          ) : (
            <button
              className={css.btnSaveOrEdit}
              type="submit"
              onSubmit={handleSubmit}
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
      </Form>
    </Formik>
  );
};
