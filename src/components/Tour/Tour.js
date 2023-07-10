import React, { useState, useEffect } from 'react';
import { useTour } from '@reactour/tour'
import { AiOutlineQuestion } from 'react-icons/ai';
import css from './Tour.module.css';

export const Tour = () => {
  const { isOpen, setIsOpen, setCurrentStep } = useTour();
  const [tourStarted, setTourStarted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (!tourStarted) {
        setCurrentStep(0); 
        setTourStarted(true);
      }
    } else {
      setTourStarted(false); 
    }
  }, [isOpen, setCurrentStep]);

  const handleOpenTour = () => {
    setIsOpen(true);
  };

  return (
    <button onClick={handleOpenTour} className={css.buttonTour}>
      <AiOutlineQuestion />
    </button>
  );
};
