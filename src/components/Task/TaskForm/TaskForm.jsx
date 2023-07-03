import css from './TaskForm.module.css';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { IoMdClose } from 'react-icons/io';
import { SlPencil } from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { addTask, fetchTasks } from 'redux/tasks/taskOperation';

export const TaskForm = ({ onClose, tasks }) => {
  const dispatch = useDispatch();
  console.log('form tasks', tasks);
  const category = tasks[0].category;
  const initialValues = {
    title: 'Enter text',
    start: '9:00',
    end: '14:00',
    priority: 'low',
  };
  const todoSchema = Yup.object().shape({
    title: Yup.string().max(250).required('Title is required'),
    start: Yup.string()
      .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid start time')
      .required('Start time is required'),
    end: Yup.string()
      .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid end time')
      .when('start', (start, schema) =>
        schema.test({
          test: function (end) {
            if (!start || !end) return true;
            return end > start;
          },
          message: 'End time must be greater than start time',
        })
      )
      .required('End time is required'),
    priority: Yup.string()
      .oneOf(['low', 'medium', 'high'])
      .required('Priority is required'),
    // date: Yup.string()
    //   .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format')
    //   .required('Date is required'),
    // category: Yup.string()
    //   .oneOf(['to-do', 'in-progress', 'done'], 'Invalid category')
    //   .required('Category is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { title, start, end, priority } = values;
    const date = values.date || '2023-06-30';
    dispatch(
      addTask({
        title,
        date,
        start,
        end,
        priority,
        category,
      })
    );
    resetForm();
    onClose();

    dispatch(fetchTasks());
  };

  return (
    <div className={css.modal_form}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={todoSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className={css.form}>
            <div className={css.box}>
              <label className={css.label} htmlFor="title">
                Title
              </label>
              <Field
                className={css.field}
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <ErrorMessage
                className={css.error}
                name="title"
                component="div"
              />
            </div>
            <div className={css.box_time}>
              <div className={css.box}>
                <label className={css.label} htmlFor="start">
                  Start
                </label>
                <Field
                  className={css.field}
                  type="text"
                  name="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start}
                />
                <ErrorMessage
                  className={css.error}
                  name="start"
                  component="div"
                />
              </div>
              <div className={css.box}>
                <label className={css.label} htmlFor="end">
                  End
                </label>
                <Field
                  className={css.field}
                  type="text"
                  name="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.end}
                />
                <ErrorMessage
                  className={css.error}
                  name="end"
                  component="div"
                />
              </div>
            </div>

            <div className={css.radio_group}>
              <label>
                <Field
                  className={css.hidden}
                  type="radio"
                  name="priority"
                  value="low"
                />
                <span
                  className={`${css.radio_button} ${css.radio_button_low}`}
                ></span>
                Low
              </label>
              <label>
                <Field
                  className={css.hidden}
                  type="radio"
                  name="priority"
                  value="medium"
                />
                <span
                  className={`${css.radio_button} ${css.radio_button_medium}`}
                ></span>
                Medium
              </label>
              <label>
                <Field
                  className={css.hidden}
                  type="radio"
                  name="priority"
                  value="high"
                />
                <span
                  className={`${css.radio_button} ${css.radio_button_high}`}
                ></span>
                High
              </label>
            </div>

            <button className={css.icon_close} onClick={onClose}>
              {<IoMdClose className={css.icon} />}
            </button>
            <button className={css.button} type="submit">
              {<SlPencil className={css.icon_pencil} />}
              Edit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
