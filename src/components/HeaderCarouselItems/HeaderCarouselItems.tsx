import React, { FC, memo } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { IHeaderCarouselItems } from '../../types/types';
import { CustomBtnGradient, CustomContainer, CustomDarkBg, CustomMovieGenre, CustomMovieName, CustomMovieText, CustomWatchNowBtn } from './HeaderCarouselItemsStyles';

interface HeaderCarouselItemsProps {
  value: IHeaderCarouselItems;
}

const HeaderCarouselItems: FC<HeaderCarouselItemsProps> = ({ value }) => {
  return (
    <CustomContainer style={{ backgroundImage: `url(${value.imageSrc})` }}>
      <CustomDarkBg>
        <CustomMovieGenre>{value.genre}</CustomMovieGenre>
        <div style={{ marginTop: '12px' }}>
          <StarIcon sx={{ color: 'white' }} />
          <StarIcon sx={{ color: 'white' }} />
          <StarIcon sx={{ color: 'white' }} />
          <StarIcon sx={{ color: 'white' }} />
          <StarIcon sx={{ color: 'white' }} />
        </div>
        <CustomMovieName>{value.name}</CustomMovieName>
        <CustomMovieText>{value.text}</CustomMovieText>
        <CustomBtnGradient>
          <CustomWatchNowBtn>Watch Now</CustomWatchNowBtn>
        </CustomBtnGradient>
      </CustomDarkBg>
    </CustomContainer>
  );
};

export default memo(HeaderCarouselItems);
