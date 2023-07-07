import { AiOutlineQuestion } from 'react-icons/ai';
import React from 'react';
import { useTour } from '@reactour/tour'
import css from '../Header/ThemeToggle/themeToggle.module.css'




export const Tour = () => {

 const { setIsOpen } = useTour();

  return (
    <button onClick={() => setIsOpen(true)} className={css.button}><AiOutlineQuestion />
    </button>
  );
};
