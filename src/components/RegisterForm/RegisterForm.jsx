import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RxEnter } from 'react-icons/rx';
import { BiErrorCircle } from 'react-icons/bi';
import { VscPass } from 'react-icons/vsc';
import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { register, resendVerify } from 'redux/auth/authOperation';
import { useState } from 'react';
import RegisterVerifyModal from './RegisterVerifyModal/RegisterVerifyModal';
import { Toaster } from 'react-hot-toast';
import { Vortex } from 'react-loader-spinner';

const PASSWORD_REGEXP = /([a-zA-z_\d]){6,}/;
const EMAIL_REGEXP = /(^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .max(28, 'Name must be no more 28 characters')
    .required('Name is Required'),
  email: Yup.string()
    .matches(EMAIL_REGEXP, 'Invalid email')
    .email('Invalid email')
    .required('Email is Required'),
  password: Yup.string()
    .matches(
      PASSWORD_REGEXP,
      `Invalid Password: 
      Must be at least 6 characters, 
      Must be latin letters `
    )
    .required('Password is Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleToggleModal = () => setIsOpened(!isOpened);

  const handleSubmit = async (values, { resetForm }) => {
    setUserEmail(values.email);

    await dispatch(register({ ...values })).then(data => {
      if (data.meta.requestStatus === 'fulfilled') {
        setIsOpened(true);
      }
      return;
    });

    await resetForm();
  };

  const handleResend = () => {
    dispatch(resendVerify(userEmail));
  };

  return (
    <div className={css.register_container}>
      <h3 className={css.title}>Sign up</h3>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
        validateOnChange={false}
      >
        {({ errors, touched, values, isSubmitting, dirty }) => (
          <Form className={css.register_form}>
            <label
              htmlFor="name"
              className={`${css.label}  ${
                touched.name && errors.name ? css.error_label : ''
              }  ${touched.name && !errors.name ? css.success_label : ''}`}
            >
              Name
              <Field
                className={`${css.register_input} ${
                  touched.name && errors.name ? css.error_input : ''
                } ${touched.name && !errors.name ? css.success_input : ''}`}
                name="name"
                placeholder="Enter your name"
              ></Field>
              <ErrorMessage
                name="name"
                component="p"
                className={css.error_message}
              />
              {touched.name && errors.name ? (
                <BiErrorCircle className={css.iconError} />
              ) : (
                ''
              )}
              {!errors.name && values.name !== '' ? (
                <>
                  <p className={css.success_message}>This is an CORRECT name</p>
                  <VscPass className={css.iconOk} />
                </>
              ) : (
                ''
              )}
            </label>
            <label
              htmlFor="email"
              className={`${css.label}  ${
                touched.email && errors.email ? css.error_label : ''
              } ${touched.email && !errors.email ? css.success_label : ''}`}
            >
              Email
              <Field
                className={`${css.register_input} ${
                  touched.email && errors.email ? css.error_input : ''
                } ${touched.email && !errors.email ? css.success_input : ''}`}
                name="email"
                placeholder="Enter email"
                type="email"
                autoComplete="hidden"
              ></Field>
              <ErrorMessage
                name="email"
                component="p"
                className={css.error_message}
              />
              {touched.email && errors.email ? (
                <BiErrorCircle className={css.iconError} />
              ) : (
                ''
              )}
              {!errors.email && values.email !== '' ? (
                <>
                  <p className={css.success_message}>
                    This is an CORRECT email
                  </p>
                  <VscPass className={css.iconOk} />
                </>
              ) : (
                ''
              )}
            </label>
            <label
              htmlFor="password"
              className={`${css.label}  ${
                touched.password && errors.password ? css.error_label : ''
              } ${
                touched.password && !errors.password ? css.success_label : ''
              }`}
            >
              Password
              <Field
                className={`${css.register_input} ${
                  touched.password && errors.password ? css.error_input : ''
                } ${
                  touched.password && !errors.password ? css.success_input : ''
                }`}
                name="password"
                placeholder="Enter email"
                type="password"
              ></Field>
              <ErrorMessage
                name="password"
                component="p"
                className={css.error_message}
              />
              {touched.password && errors.password ? (
                <BiErrorCircle className={css.iconError} />
              ) : (
                ''
              )}
              {!errors.password && values.password !== '' ? (
                <>
                  <p className={css.success_message}>
                    This is an CORRECT password
                  </p>
                  <VscPass className={css.iconOk} />
                </>
              ) : (
                ''
              )}
            </label>
            <button
              className={css.register_button}
              type="submit"
              disabled={isSubmitting || !dirty}
            >
              Sign Up
              <RxEnter className={css.signup_image} />
            </button>
            {/* <a
              href="https://goosetrackback.onrender.com/api/auth/google"
              className={css.register_button_google}
              type="submit"
            >
              <img
                width="25"
                src="https://img.icons8.com/3d-fluency/94/google-logo.png"
                alt="google-logo"
              />
              Sign Up With Google
            </a> */}
            {isSubmitting && (
              <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                wrapperClass="vortex-wrapper"
                colors={['blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow']}
              />
            )}
            {isOpened && (
              <RegisterVerifyModal
                onCloseModal={handleToggleModal}
                handleResend={handleResend}
              />
            )}
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
};

export default RegisterForm;
