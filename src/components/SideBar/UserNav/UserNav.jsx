import React from 'react';

import { LuCalendarCheck2 } from 'react-icons/lu';
import { RiUserFollowLine } from 'react-icons/ri';
import { BsBarChart } from 'react-icons/bs';
// import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// Зробив заглушку в посиланнях

import css from './userNav.module.css';

export const UserNav = () => {
  return (
    <div className={css.linksConteiner}>

      <NavLink to="/userInfo" className={css.link} data-tour="step-2">
        <RiUserFollowLine size={24} /> My account
      </NavLink>
      <NavLink to="/mainLayout" className={css.link} data-tour="step-3">
        <LuCalendarCheck2 size={24} />
        Calendar{' '}
      </NavLink>
      <NavLink to="/statistics" className={css.link} data-tour="step-4">
        <BsBarChart size={24} /> Statistics
      </NavLink>
    </div>
  );
};
