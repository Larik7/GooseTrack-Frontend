import { useEffect, useState } from 'react';
import css from './UserInfo.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export const UserInfo = toggleShowSideBar => {
  const { user } = useSelector(selectUser);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (!user?.name) {
      setAvatar(null);
    } else {
      setAvatar(user?.name.slice(0, 1).toUpperCase());
    }
  }, [user?.name]);

  return (
    <NavLink
      to="/account"
      style={{ textDecoration: 'none' }}
      onClick={() => toggleShowSideBar(false)}
    >
      <section className={css.UserInfoSection}>
        <p className={css.userName}> {user.name} </p>
        <div>
          {!user?.avatarUrl ? (
            <p className={css.avatarWord}>{avatar}</p>
          ) : (
            <img
              src={user?.avatarUrl}
              alt="User avatar"
              width="28"
              height="28"
            />
          )}
        </div>
      </section>
    </NavLink>
  );
};
