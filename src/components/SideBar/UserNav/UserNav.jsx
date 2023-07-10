import React, { useState } from 'react';
import { LuCalendarCheck2 } from 'react-icons/lu';
import { RiUserFollowLine } from 'react-icons/ri';
import { BsBarChart } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import css from './userNav.module.css';

export const UserNav = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = menu => {
    setActiveMenu(menu);
  };

  return (
    <div className={css.linksConteiner}>
      <NavLink
        to="userInfo"
        className={({ isActive }) => (isActive ? css.active : css.link)}
        data-tour="step-2"
        onClick={() => handleMenuClick('userInfo')}
      >
        <RiUserFollowLine size={24} /> My account
      </NavLink>
      <NavLink
        to="/calendar"
        className={({ isActive }) => (isActive ? css.active : css.link)}
        data-tour="step-3"
        onClick={() => handleMenuClick('calendar')}
      >
        <LuCalendarCheck2 size={24} />
        Calendar{' '}
      </NavLink>
      <NavLink
        to="statistics"
        className={({ isActive }) => (isActive ? css.active : css.link)}
        data-tour="step-4"
        onClick={() => handleMenuClick('statistics')}
      >
        <BsBarChart size={24} /> Statistics
      </NavLink>
    </div>
  );
};
