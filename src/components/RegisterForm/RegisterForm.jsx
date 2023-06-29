import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RxEnter } from 'react-icons/rx';
import { BiErrorCircle } from 'react-icons/bi';
import { VscPass } from 'react-icons/vsc';
import css from './RegisterForm.module.css';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(15, 'Name must be at least 15 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(3, 'Password must be at least 3 characters!')
    .max(15, 'Password must be no more 15 characters!')
    .required('Required'),
});

export const RegisterForm = () => {
  const [dataForm, setDataForm] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    setDataForm({ values });
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  console.log(dataForm);

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
        {({ errors, touched, values }) => (
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
            <button className={css.register_button} type="submit">
              Sign Up
              <RxEnter className={css.signup_image} />
            </button>
            <a
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
            </a>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
