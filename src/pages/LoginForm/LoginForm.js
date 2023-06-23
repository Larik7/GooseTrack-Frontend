import css from './LoginForm.module.css';

import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

export const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({});

  const handleSumbit = (values, { resetForm }) => {
    console.log(values);
    if (values.password === '') {
      alert('password or email is going wrong');
      return;
    }
    setLoginForm(values);
    resetForm();
  };

  console.log(loginForm);

  return (
    <div className={css.main_container}>
      <div className={css.inside_container}>
        <h3 className={css.title}> Log In</h3>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSumbit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit} className={css.form}>
              <div className={css.email_box}>
                <label htmlFor="email" className={css.label_email}>
                  Email
                </label>
                <Field
                  className={css.field}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={'nadiia@gmail.com'}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className={css.password_box}>
                <label htmlFor="password" className={css.label_email}>
                  Password
                </label>
                <Field
                  className={css.field}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder={'password'}
                />
                {errors.password && touched.password && errors.password}
              </div>
              <button
                type="submit"
                // disabled={isSubmitting}
                className={css.button}
              >
                Log in
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
