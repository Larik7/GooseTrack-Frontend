import { FiMoon, FiSun } from 'react-icons/fi';
import { React, useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import css from './themeToggle.module.css';

export const ThemeToggler = () => {
  const [theme, toggleTheme]   = useTheme();

    useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
  
  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <button className={css.button} onClick={handleTheme}>
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
};
