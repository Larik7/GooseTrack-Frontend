// import css from './header.module.css';
import Logo from '../../images/sideBar/Goose_logo_SideBar.png';
import cssLogo from '../SideBar/sideBar.module.css';
import css from './header.module.css';
import avatar from '../../images/avatars/avatarShev.jpg';

// import { useState } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
// переключатели темы
import { ThemeToggler } from './ThemeToggle/ThemeToggle';

// import { HiOutlineSun } from "react-icons/hi"

export const Header = ({ openMenu, setOpen }) => {
  const handlerMenu = () => {
    setOpen(!openMenu);
  };

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
          {' '}
          <RxHamburgerMenu size={32} />
        </button>
        <p className={css.infoTitle}>Info Title</p>

        <div className={css.conteinerBtn}>
          <button className={css.feedbackBtn}>Feedback</button>
          <div className={css.infoMenu}>
            <ThemeToggler />
            <p className={css.userName}> UserName </p>
            <div className={css.imgBox}>
              <img src={avatar} alt="userImg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
