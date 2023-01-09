import React, { FC, memo } from 'react';
import HeaderCarousel from '../../components/HeaderCarousel/HeaderCarousel';
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
import styled from 'styled-components';

const CustomHomeContainer = styled.section`
  height: 3000px;
  background-color: ${(props) => props.theme.colors.background};
`;
const CustomDarkBg = styled.div`
  position: fixed;
  top: 0;
  right: 0px;
  bottom: 0;
  z-index: 1;
  width: 1px;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 0px 0 50px 40px rgba(0, 0, 0, 1);
`;

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
