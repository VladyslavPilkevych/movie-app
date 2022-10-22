import React, { FC, memo } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { IHeaderCarouselItems } from '../../types/types';
import styled from 'styled-components';

const CustomContainer = styled.div`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 550px;
  @media ${(props) => props.theme.media.tablet} {
    height: 350px;
  }
  @media ${(props) => props.theme.media.phone} {
    height: 150px;
  }
`;

const CustomDarkBg = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  background: linear-gradient(
    269.96deg,
    rgba(29, 29, 29, 0) 0.04%,
    rgba(29, 29, 29, 0.8) 99.5%
  );
  @media ${(props) => props.theme.media.phone} {
    padding: 5%;
  }
`;
const CustomMovieGenre = styled.div`
  background-color: hsla(0, 50%, 0%, 0.5);
  border-radius: 0 10px;
  padding: 5px;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.lightBlue};
`;
const CustomMovieName = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 56px;
  margin-top: 15px;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 36px;
    margin-top: 12px;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 20px;
    margin-top: 10px;
  }
`;
const CustomMovieText = styled.h5`
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  max-width: 60%;
  font-size: 16px;
  margin-top: 20px;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 14px;
    margin-top: 15px;
  }
  @media ${(props) => props.theme.media.phone} {
    max-width: 80%;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
  }
`;

interface HeaderCarouselItemsProps {
  value: IHeaderCarouselItems;
}

const HeaderCarouselItems: FC<HeaderCarouselItemsProps> = ({ value }) => {
  return (
    <CustomContainer style={{ backgroundImage: `url(${value.imageSrc})` }}>
      <CustomDarkBg>
        <CustomMovieGenre>{value.genre}</CustomMovieGenre>
        <div style={{marginTop: '12px'}}>
            <StarIcon sx={{color: 'white'}} />
            <StarIcon sx={{color: 'white'}} />
            <StarIcon sx={{color: 'white'}} />
            <StarIcon sx={{color: 'white'}} />
            <StarIcon sx={{color: 'white'}} />
        </div>
        <CustomMovieName>{value.name}</CustomMovieName>
        <CustomMovieText>{value.text}</CustomMovieText>
      </CustomDarkBg>
    </CustomContainer>
  );
};

export default memo(HeaderCarouselItems);
