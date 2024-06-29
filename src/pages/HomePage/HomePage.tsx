import React from 'react';
import HeaderCarousel from './HomePageSection/HeaderCarouselSection';
import MoviesContainer from './HomePageSection/MoviesContainerSection';
import { CustomDarkBg, CustomHomeContainer } from './HomePage.style';

const HomePage: React.FC = () => {
  return (
    <>
      <CustomDarkBg />
      <CustomHomeContainer>
        <HeaderCarousel />
        <MoviesContainer />
      </CustomHomeContainer>
    </>
  );
};

export default React.memo(HomePage);
