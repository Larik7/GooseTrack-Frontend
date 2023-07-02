import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperation';
import css from './logoutBtn.module.css';
import { MdLogout } from 'react-icons/md';

export const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <button className={css.LogOutBtn} onClick={handleLogout}>
        Log out <span><MdLogout size={22}/> </span>
      </button>
    </div> 
  );
};
