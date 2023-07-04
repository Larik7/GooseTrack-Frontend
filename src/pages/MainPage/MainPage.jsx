import React from 'react';

import { AuthSection } from 'components/MainPage/AuthSection/AuthSection';
import { Description } from 'components/MainPage/Description/Description';
import { ReviewsSlider } from 'components/MainPage/ReviewSlider/ReviewSlider';
// import { ScrollToTop } from 'components/ScrolButton/scrollButton';

export const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
     

    </>
  );
};
