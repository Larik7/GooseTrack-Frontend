import { useRef } from 'react';
import avatar from '../../images/avatars/avatarShev.jpg';

import css from './UserInfo.module.css';

 const UserInfo = () => {
  const inputRef = useRef(null);

  const handleClick = (event) => {
    event.preventDefault()
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    event.target.value = null;
  };

  return (
    <form className={css.userInfoForm} type="submit">
      <div className={css.imgBox} htmlFor="">
        <img src={avatar} alt="userImg" />
      </div>
      <label htmlFor="">
        <input
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />

        <button className={css.btnChangeAvatar} onClick={handleClick}>+</button>

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
