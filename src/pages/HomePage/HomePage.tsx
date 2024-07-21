import React from 'react';
import HeaderCarousel from './HomePageSection/HeaderCarouselSection';
import MoviesContainer from './HomePageSection/MoviesContainerSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeaderCarousel />
      <MoviesContainer />
    </>
  );
};

export default React.memo(HomePage);
