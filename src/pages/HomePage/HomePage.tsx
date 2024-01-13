import React, { FC, memo } from 'react';
import HeaderCarousel from '../../components/HeaderCarousel/HeaderCarousel';
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
import styled from 'styled-components';
import { CustomDarkBg, CustomHomeContainer } from './HomePageStyles';

const HomePage: FC = () => {
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

export default memo(HomePage);
