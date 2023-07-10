import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from '../../redux/auth/selectors';
import { updateUser } from '../../redux/auth/authOperation';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UserFormSchema } from './UserFormSchema';
import { MyDatePicker } from './DatePicker/DatePicker';

import css from './UserForm.module.css';

export const UserForm = ({ theme = '' }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [userData, setUserData] = useState(null);

  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    if (!userInfo.avatarURL) {
      setAvatar(userInfo.name.slice(0, 1).toUpperCase());
    }
  }, [userInfo.avatarURL, userInfo.name]);

  const imgURL = userInfo.avatarURL ?? null;

  let initialUserInfo = {
    phone: userInfo && userInfo.phone ? userInfo.phone : '',
    skype: userInfo && userInfo.skype ? userInfo.skype : '',
    name: userInfo ? userInfo.name : '',
    email: userInfo ? userInfo.email : '',
    birthday: userInfo ? moment(userInfo).format('YYYY-MM-DD') : '1999-12-31',
  };

  const updateDate = changeDate => {
    const formattedDate = moment(changeDate).format('YYYY-MM-DD');
    setUserData(formattedDate);
  };

  const submiting = values => {
    const formData = new FormData();
    const userInfoKeys = ['name', 'email', 'phone', 'skype'];

    userInfoKeys.forEach(key => {
      const newValue = { ...userInfo, ...values };
      formData.append(key, newValue[key]);
    });
    if (file) {
      formData.append('avatar', file);
    }
    if (userData) {
      formData.append('birthday', `${userData}`);
      setPreviewImageUrl(null)
    }

    dispatch(updateUser(formData));
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
                <div className={`${css.avatar_upload_container} ${theme}`}>
                    <Field
                      id="avatar-upload"
                      name="avatar"
                      type="file"
                      accept="image/*"
                      onChange={e =>
                        handleAvatarChange(e, formik.setFieldValue)
                      }
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor="avatar-upload"
                      className={`${css.avatar_upload_btn} `}
                    ></label>
                  </div>
                <div className={css.user_page__avatar_box}>
                  {!imgURL && !previewImageUrl ? (
                    <p className={css.avatarWord}>{userInfo ? avatar : ''}</p>
                  ) : (
                    <img
                      src={previewImageUrl ? previewImageUrl : imgURL || imgURL ? imgURL : previewImageUrl}
                      alt="User avatar"
                      className={css.user_page__avatar}
                    />
                  )}
                </div>

                <h3 className={`${css.user_page__name} ${theme}`}>
                  {userInfo?.name || 'name'}
                </h3>
                <p className={`${css.user_page__role} ${theme}`}>User</p>
              </div>

              <div className={`${css.username_form} ${theme}`}>
                <label
                  htmlFor="Name"
                  className={`${css.username_form__label} ${theme}`}
                >
                  User Name
                  <Field
                    name="name"
                    type="text"
                    className={
                      `${css.username_form_input} ${theme}` +
                      (formik.errors.name && formik.touched.name
                        ? css.is_invalid
                        : '')
                    }
                    placeholder="User name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.invalid_feedback}
                  />
                </label>
                <label
                  htmlFor="phone"
                  className={`${css.username_form__label} ${theme}`}
                >
                  Phone
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
                  htmlFor="birthday"
                  className={`${css.username_form__label} ${theme}`}
                >
                  Birthday
                  <MyDatePicker
                    updateDate={updateDate}
                    name="birthday"
                    birthday={userInfo.birthday}
                    className={css.my_date_picker}
                  />
                  <ErrorMessage
                    name="birthday"
                    component="div"
                    className={css.invalid_feedback}
                  />
                </label>
                

                <label
                  htmlFor="skype"
                  className={`${css.username_form__label} ${theme}`}
                >
                  Skype
                  <Field
                    className={`${css.username_form_input} ${theme}`}
                    id="skype"
                    name="skype"
                    type="text"
                    placeholder="Enter your Skype link"
                  />
                  <ErrorMessage
                    name="skype"
                    component="div"
                    className={css.invalid_feedback}
                  />
                </label>
                
                <label
                  htmlFor="email"
                  className={`${css.username_form__label} ${theme}`}
                >
                  Email 
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
                <button
                  type="submit"
                  className={`${css.username_form__submit} `}
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
