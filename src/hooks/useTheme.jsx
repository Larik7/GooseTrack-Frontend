import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};
