import { UserNav } from './UserNav/UserNav';
import { LogoutBtn } from './LogoutBtn/LogoutBtn ';
import Logo from '../../images/sideBar/Goose_logo_SideBar@2x.png';
import css from './sideBar.module.css';

import { MdClose } from 'react-icons/md';

export const SideBar = ({ openMenu, onClose }) => {
  const isStatisticsPage = window.location.pathname.includes('statistics');

  

  let containerClass;
  if (isStatisticsPage) {
    containerClass = `${css.containerSideBarSt} ${!openMenu
          ? `${css.containerSideBarSt} ${css.open}`
          : `${css.containerSideBarSt}`}`;
  } else {
    containerClass = `${css.conteinerSideBar} ${!openMenu
          ? `${css.conteinerSideBar} ${css.open}`
          : `${css.conteinerSideBar}`}`;
  }

  return (
        <div
      className={
      containerClass
      }
    >
      <div className={css.logoBox}>
        <img className={css.logoImg} src={Logo} alt="Goose_logo" />
        <p className={css.logoTitle}>GooseTrack</p>

        <button className={css.btnClose} onClick={onClose}>
          <MdClose size={32} />
        </button>
      </div>

      <p className={css.titleNav}>User Panel</p>
      <UserNav />
      <LogoutBtn />
    </div>
  );
};
