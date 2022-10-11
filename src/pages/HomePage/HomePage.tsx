import React, { FC, memo } from 'react';
import HeaderCarousel from '../../components/Carousel/Carousel';
import styled from 'styled-components';

const CustomHomeContainer = styled.section`
  height: 3000px;
  background-color: ${(props) => props.theme.colors.background};
`;

const HomePage: FC = () => {
  return (
    <CustomHomeContainer>
      <HeaderCarousel />
    </CustomHomeContainer>
  );
};

export default memo(HomePage);
