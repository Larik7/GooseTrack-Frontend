import Goose from '../../images/Goose.png';
import iconLogin from '../../images/iconLogin.svg';
//import { FiLogIn } from 'react-icons/fi';
import css from './AuthSection.module.css';

export const AuthSection = () => {
  return (
    <section className={css.container}>
      <img
        className={css.hero}
        src={Goose}
        alt="Logo"
        width="142px"
        height="142px"
      />
      <div className={css.heroTitle}>
        G<i>oo</i>seTrack
      </div>
      <div className={css.nav}>
        {/* <NavLink to="/login">Sign up</NavLink> */}
        <a href="#">
          <button className={css.btnLogin}>
            {/* Log in */}
            {/* <FiLogIn /> */}
            <svg width="67" height="18">
              <use href={iconLogin}></use>
            </svg>
          </button>
        </a>
        {/* <NavLink to="/register">Sign up</NavLink> */}
        <a className={css.link} href="#">
          Sing up
        </a>
      </div>
    </section>
  );
};
