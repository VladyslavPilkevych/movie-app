import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { IHeaderCarouselItem } from '../../../../types/types';
import { CustomBtnGradient, CustomContainer, CustomDarkBg, CustomMovieGenre, CustomMovieName, CustomMovieText, CustomWatchNowBtn } from './HeaderCarouselItem.style';
import { DistanceEnum, ColorEnum } from '../../../../assets/styles';

interface HeaderCarouselItemProps {
  value: IHeaderCarouselItem;
}

const HeaderCarouselItems: React.FC<HeaderCarouselItemProps> = ({ value }) => {
  return (
    <CustomContainer style={{ backgroundImage: `url(${value.imageSrc})` }}>
      <CustomDarkBg>
        <CustomMovieGenre>{value.genre}</CustomMovieGenre>
        <div style={{ marginTop: DistanceEnum.PX1 }}>
          <StarIcon sx={{ color: ColorEnum.WHITE }} />
          <StarIcon sx={{ color: ColorEnum.WHITE }} />
          <StarIcon sx={{ color: ColorEnum.WHITE }} />
          <StarIcon sx={{ color: ColorEnum.WHITE }} />
          <StarIcon sx={{ color: ColorEnum.WHITE }} />
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

export default React.memo(HeaderCarouselItems);
