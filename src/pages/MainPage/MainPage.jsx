import React from 'react';

import { AuthSection } from 'components/AuthSection/AuthSection';
import { Description } from 'components/MainPage';

export const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      {/* <PageReviewsSlider /> */}
    </>
  );
};
