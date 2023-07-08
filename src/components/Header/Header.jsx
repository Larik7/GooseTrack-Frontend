// Header.js
import { useLocation } from 'react-router-dom';
import Logo from '../../images/sideBar/Goose_logo_SideBar.png';
import cssLogo from '../SideBar/sideBar.module.css';
import css from './header.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ThemeToggler } from './ThemeToggle/ThemeToggle';
import AddFeedbackBtn from 'components/AddFeedbackBtn/AddFeedbackBtn';
import { Tour } from '../Tour/Tour';
import { UserInfo } from './UserInfo/UserInfo';



export const Header = ({ openMenu, setOpen, toggleShowSideBar }) => {
  const handlerMenu = () => {
    setOpen(!openMenu);
  };
  const location = useLocation();
 let title = '';

  switch (location.pathname) {
    case '/calendar/statistics':
      title = 'Statistics';
      break;
    case '/calendar/userInfo':
      title = 'User Profile';
      break;
    case '/calendar':
      title = 'Calendar';
      break;
    default:
      title = '';
  }

  return (
    <header className={css.header}>
      <div className={css.logoConteiner}>
        <div className={css.logoBox}>
          <img className={cssLogo.logoImg} src={Logo} alt="Goose_logo" />
          <p className={cssLogo.logoTitle}>GooseTrack</p>
        </div>
      </div>

      <div className={css.headerInfoBox}>
        <button className={css.burgerMenu} onClick={handlerMenu}>
          <RxHamburgerMenu size={32} />
        </button>
        <p className={css.infoTitle}>{title}</p>
        <div className={css.conteinerBtn}>
          <AddFeedbackBtn feedbackBtnStyle={css.feedbackBtn} />
          <div className={css.infoMenu}>
            <ThemeToggler />
            <Tour />
            <UserInfo toggleShowSideBar={toggleShowSideBar} />
          </div>
        </div>
      </div>
    </header>
  );
};
