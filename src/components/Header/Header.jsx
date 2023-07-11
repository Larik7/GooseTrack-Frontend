import { useLocation, useParams } from 'react-router-dom';
import Logo from '../../images/sideBar/Goose_logo_SideBar@2x.png';
import cssLogo from '../SideBar/sideBar.module.css';
import css from './header.module.css';
import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ThemeToggler } from './ThemeToggle/ThemeToggle';
import AddFeedbackBtn from 'components/AddFeedbackBtn/AddFeedbackBtn';
import { Tour } from '../Tour/Tour';
import { UserInfo } from './UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../../redux/tasks/selectors';
import MotivationGoose from '../../images/MotivationGoose.png';

export const Header = ({ openMenu, setOpen, toggleShowSideBar }) => {
  const tasks = useSelector(selectAllTasks);
  const { currentDay } = useParams();

  const handlerMenu = () => {
    setOpen(!openMenu);
  };

  const location = useLocation();

const isUserInfoPage = location.pathname === '/userInfo';

  const isCalendarDayPage = location.pathname.includes('/calendar/day');
  let title = '';

  switch (location.pathname) {
    case '/statistics':
      title = 'Statistics';
      break;
    case '/userInfo':
      title = 'User Profile';
      break;
    case '/calendar':
      title = 'Calendar';
      break;
    default:
      if (location.pathname.startsWith('/calendar/day/')) {
        title = 'Calendar';
      }
      break;
  }

  const toDoTasks = tasks.filter(task => task.category === 'to-do');
  const sortByDayToDo = toDoTasks.filter(item => item.date === currentDay);
  const hasToDoTasks = sortByDayToDo.length > 0;


  const inProgressTasks = tasks.filter(task => task.category === 'in-progress');
  const sortByDayProgress = inProgressTasks.filter(
    item => item.date === currentDay
  );
  const hasInProgressTasks = sortByDayProgress.length > 0;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldRenderImage = windowWidth > 1400 ;

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
        {isCalendarDayPage && (hasInProgressTasks || hasToDoTasks)  && shouldRenderImage && (
          <div className={css.motivationalGoose}>
            <img src={MotivationGoose} alt="Motivational Goose" />
          </div>
        )}
      <div>
        
        <p className={css.infoTitle}>{title}</p>
         {isCalendarDayPage && (hasInProgressTasks || hasToDoTasks)  && shouldRenderImage && (
         <p  className={css.motivationTitle}><span className={css.firstTwoWords}>Let go</span> of the past and focus on the present!</p>
          )}</div>

        <div className={`${css.conteinerBtn} ${isUserInfoPage ? css.userInfoMargin : ''} ${(hasInProgressTasks || hasToDoTasks) ? css.titleGoose : ''}`}>
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