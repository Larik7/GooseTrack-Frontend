// import { Formik } from 'formik';
import css from './UserInfo.module.css'

export const UserInfo = () => {
  return (
    <form className={css.userInfoForm}>
      <label>
        <input type="file" />
      </label>
      <h2>Name</h2>
      <p>Second name</p>

      <label htmlFor="">
        User name
        <input type="text" />
      </label>
      <label htmlFor="">
        Birthday
        <input type="text" />
      </label>
      <label htmlFor="">
        Email
        <input type="text" />
      </label>
      <label htmlFor="">
        Phone
        <input type="text" />
      </label>
      <label htmlFor="">
        Skype
        <input type="text" />
      </label>
    </form>
  );
};
