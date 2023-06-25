import React from 'react';

import { LuCalendarCheck2 } from 'react-icons/lu';
import { RiUserFollowLine } from 'react-icons/ri';
import { BsBarChart } from 'react-icons/bs';
// import { Routes, Route } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';


import css from './userNav.module.css';

export const UserNav = () => {
  return (
    <div className={css.linksConteiner}>
      <a to="/account" className={css.link}>
    
        <RiUserFollowLine size={24} /> My account
      </a>
      <a to="/calendar" className={css.link}>
      
        <LuCalendarCheck2 size={24} />
        Calendar{' '}
      </a>
      <a to="/statistics" className={css.link}>
   
        <BsBarChart size={24} /> Statistics
      </a>
    </div>
  );
};
