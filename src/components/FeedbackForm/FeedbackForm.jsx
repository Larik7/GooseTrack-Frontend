import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { AiFillStar as Star } from 'react-icons/ai';
import { BiPencil as Pencil, BiTrash as Trash } from 'react-icons/bi';

// import { useDispatch } from 'react-redux';

let userValidSchema = object({
  rating: string().required(),
  text: string().required(),
});
export const FeedbackForm = ({
  isEditReview,
  editedRating,
  editedMessage,
  editedId,
  handleEditReview,
}) => {
  //   const dispatch = useDispatch();
  const [rating, setRating] = useState(editedRating || 0);
  const [message, setMessage] = useState(editedMessage || '');
  const [hover, setHover] = useState(null);
  const [id, setId] = useState('');
  useEffect(() => {
    if (isEditReview) {
      setRating(editedRating);
      setMessage(editedMessage);
      setId(editedId);
    }
  }, [editedMessage, editedRating, editedId, isEditReview]);
  const reset = () => {
    setMessage('');
    setRating(0);
    setHover(null);
  };
  const handleSubmit = async e => {
    e.preventDefault();
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
    if (isEditReview) {
      if (editedMessage === currentMessage && editedRating === rating) {
        return;
      }
      reset();
    } else {
      reset();
    }
    handleEditReview();
  };
  return (
    <Formik
      initialValues={{ rating, message }}
      validationSchema={userValidSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = 1 + i;
            return (
              <label key={i}>
                <Field
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <Star
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
          <label>
            <Field
              type="text"
              required
              value={message}
              onChange={event => setMessage(event.currentTarget.value)}
              id="FBId"
              name="message"
              placeholder="Enter text"
            />
          </label>
          {editedRating ? (
            <div>
              <button type="button">
                <Pencil />
              </button>
              <button type="button">
                <Trash />
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          {editedRating === rating && editedMessage === message ? (
            <button type="button">Edit</button>
          ) : (
            <button type="submit">Save</button>
          )}
          <button type="button">Cancel</button>
        </div>
      </Form>
    </Formik>
  );
};
