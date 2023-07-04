import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Перевірити редукс!!!!
import { isToken } from '../../redux/auth/selectors';
import { refreshToken } from '../../redux/auth/authOperation';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UserFormSchema } from './UserFormSchema';
import { DatePicker } from './DatePicker/DatePicker';
import { Notify } from 'notiflix';
import css from './UserForm.module.css';
import userAvatar from '../../images/avatars/avatarShev.jpg';

export const UserForm = ({ theme = '' }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(isToken);
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [file, setFile] = useState(null);

  let initialUserInfo = {
    phone: userInfo.phone || '',
    telegram: userInfo.telegram || '',
    userName: userInfo.userName,
    email: userInfo.email,
    birthday: userInfo.birthday,
    avatarUpload: false,
  };

  const submiting = async values => {
    const formData = new FormData();
    const userInfoKeys = ['userName', 'email', 'birthday', 'phone', 'telegram'];
    userInfoKeys.forEach(key => {
      if (!values[key]) {
        return;
      }
      if (key === 'birthday') {
        const birthday = moment(values[key]).format('YYYY-MM-DD');
        formData.append('birthday', birthday);
        return;
      }
      formData.append(key, values[key]);
    });
    if (file) {
      formData.append('avatar', file);
    }
    try {
      await dispatch(refreshToken(formData));
      Notify.success('Success.Info updated.');
    } catch (error) {
      console.log(error);
      Notify.error('Error.Something gone wrong.');
    }
  };

  const handleAvatarChange = (e, setFieldValue) => {
    const userAvatarPreviewImg = e.target.files[0];
    setFile(userAvatarPreviewImg);
    const reader = new FileReader();
    const blob = new Blob([userAvatarPreviewImg], {
      type: userAvatarPreviewImg.type,
    });
    reader.readAsDataURL(blob);
    reader.onload = () => {
      setPreviewImageUrl(reader.result);
      setFieldValue('avatar-upload', !!userAvatarPreviewImg);
    };
  };

  return (
    <section className={`${css.user_page} ${theme}`}>
      <Formik
        initialValues={initialUserInfo}
        validationSchema={UserFormSchema}
        onSubmit={submiting}
        enableReinitialize={true}
      >
        {formik => {
          return (
            <Form>
              <div className={`${css.user_page__avatar_container} ${theme}`}>
                <img
                  className={`${css.user_page__avatar} ${theme}`}
                  src={previewImageUrl || userInfo.avatar || userAvatar}
                  alt="User Avatar"
                />
                <div className={`${css.avatar_upload_container} ${theme}`}>
                  <Field
                    id="avatar-upload"
                    name="avatar"
                    type="file"
                    accept="image/*"
                    onChange={e => handleAvatarChange(e, formik.setFieldValue)}
                    style={{ display: 'none' }}
                  />
                  <label
                    htmlFor="avatar-upload"
                    className={`${css.avatar_upload_btn} ${theme}`}
                  ></label>
                </div>
                <h3 className={`${css.user_page__name} ${theme}`}>
                  {userInfo.userName || 'Username'}
                </h3>
                <p className={`${css.user_page__role} ${theme}`}>User</p>
              </div>
              <div className={`${css.username_form} ${theme}`}>
                <label
                  htmlFor="userName"
                  className={`${css.username_form__label} ${theme}`}
                >
                  Username
                  <Field
                    name="userName"
                    type="text"
                    className={
                      `${css.username_form_input} ${theme}` +
                      (formik.errors.userName && formik.touched.userName
                        ? css.is_invalid
                        : '')
                    }
                    placeholder="User name"
                  />
                  <ErrorMessage
                    name="userName"
                    component="div"
                    className={css.invalid_feedback}
                  />
                </label>

                <label
                  htmlFor="birthday"
                  className={`${css.username_form__label} ${theme}`}
                >
                  Birthday:
                  <DatePicker
                    name="birthday"
                    birthday={formik.values.birthday}
                    className={css.my_date_picker}
                  />
                  <ErrorMessage
                    name="birthday"
                    component="div"
                    className={css.invalid_feedback}
                  />
                </label>

                <label
                  htmlFor="email"
                  className={`${css.username_form__label} ${theme}`}
                >
                  Email Address
                  <Field
                    name="email"
                    type="email"
                    className={`${css.username_form_input} ${theme}`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.invalid_feedback}
                  />
                </label>
                <label
                  htmlFor="phone"
                  className={`${css.username_form__label} ${theme}`}
                >
                  Phone:
                  <Field
                    className={`${css.username_form_input} ${theme}`}
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Enter your phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={css.invalid_feedback}
                  />
                </label>

                <label
                  htmlFor="telegram"
                  className={`${css.username_form__label} ${theme}`}
                >
                  Telegram:
                  <Field
                    className={`${css.username_form_input} ${theme}`}
                    id="telegram"
                    name="telegram"
                    type="text"
                    placeholder="Enter your Telegram link"
                  />
                  <ErrorMessage
                    name="telegram"
                    component="div"
                    className={css.invalid_feedback}
                  />
                </label>
                <button
                  type="submit"
                  className={`${css.username_form__submit} ${theme}`}
                  disabled={
                    formik.isSubmitting || !formik.touched || !formik.dirty
                  }
                >
                  Save Changes
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};
