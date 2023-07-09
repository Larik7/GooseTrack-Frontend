import { useEffect, useState } from 'react';
import css from './UserInfo.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export const UserInfo = toggleShowSideBar => {
  const user = useSelector(selectUser) ?? {};
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (!user.name) {
      setAvatar(null);
    } else {
      setAvatar(user.name.slice(0, 1).toUpperCase());
    }
  }, [user.name]);

  const username = user.name ?? '';
  const imgURL = user.avatarURL ?? null;

  return (
    <NavLink
      to="/userInfo"
      style={{ textDecoration: 'none' }}
      onClick={() => toggleShowSideBar(false)}
    >
      <section className={css.UserInfoSection}>
        <p className={css.userName}>{username}</p>
        <div>
          {!imgURL ? (
            <p className={css.avatarWord}>{user ? avatar : ''}</p>
          ) : (
              <img src={imgURL} alt="User avatar" className={css.avatar } />
          )}
        </div>
      </section>
    </NavLink>
  );
};
