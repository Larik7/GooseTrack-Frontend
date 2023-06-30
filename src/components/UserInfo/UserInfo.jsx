import avatar from '../../images/avatars/avatarShev.jpg';

import css from './UserInfo.module.css';

export const UserInfo = () => {
  return (
    <form className={css.userInfoForm} type="submit">
      <div className={css.imgBox} htmlFor="">
        <img src={avatar} alt="userImg" />
      </div>
      <label htmlFor="">
        <input className="updatePhoto" type="file" />
        <span className={css.span}>+</span>
        <h2>Nadiia Doe</h2>
        <p>User</p>
      </label>
      <ul>
        <li>
          <label className={css.label} htmlFor="">
            User name
            <input className={css.textInput} type="text" />
          </label>
        </li>
        <li>
          <label className={css.label} htmlFor="">
            Birthday
            <input className={css.textInput} type="text" />
          </label>
        </li>
        <li>
          <label className={css.label} htmlFor="">
            Email
            <input className={css.textInput} type="text" />
          </label>
        </li>
        <li>
          <label className={css.label} htmlFor="">
            Phone
            <input className={css.textInput} type="text" />
          </label>
        </li>
        <li>
          <label className={css.label} htmlFor="">
            Skype
            <input className={css.textInput} type="text" />
          </label>
        </li>
      </ul>

      <button className={css.submitButton}>Save changes</button>
    </form>
  );
};
