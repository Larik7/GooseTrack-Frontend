import React from 'react';
import { AuthSection } from 'components/MainPage/AuthSection/AuthSection';
import { Description } from 'components/MainPage/Description/Description';
import { ReviewsSlider } from 'components/MainPage/ReviewSlider/ReviewsSlider';
import Footer from 'components/MainPage/Footer/Footer';

export const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <Footer />
    </>
  );
};
