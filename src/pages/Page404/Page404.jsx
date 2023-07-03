import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import image404 from 'images/Goose404.png';

import css from './Pаge404.module.css'


export const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 5000); 

    return () => clearTimeout(redirectTimeout); 
  }, [navigate]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        4 <img src={image404} alt="404" /> 4
      </h1>
      <p className={css.message}>
       We’re sorry, the page you requested could not be found. Please go back to the homepage. 
      </p>
    </div>
  );
};
