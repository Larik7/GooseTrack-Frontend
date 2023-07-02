import Goose from '../../../images/Goose.png';
import { FiLogIn } from 'react-icons/fi';
import { ButtonNavigation } from '../../AuthNavigate/AuthNavigate';
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
        <ButtonNavigation
          className={css.btnLogin}
          route="/login"
          btnText="Log in"
        >
          <FiLogIn size={18} />
        </ButtonNavigation>
        <ButtonNavigation
          className={css.link}
          route="/register"
          btnText="Sing up"
        />
      </div>
    </section>
  );
};
