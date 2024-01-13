import React, { FC, memo } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { IHeaderCarouselItems } from '../../types/types';
import { D, ThemeColor } from '../../assets/styles';
import { CustomContainer, CustomDarkBg, CustomMovieGenre, CustomMovieName } from './MovieItemStyles';

interface HeaderCarouselItemsProps {
  value: IHeaderCarouselItems;
  height?: number;
}

const MovieItem: FC<HeaderCarouselItemsProps> = ({ value, height }) => {
  return (
    <CustomContainer
      style={{ backgroundImage: `url(${value.imageSrc})`, height: height }}
    >
      <CustomDarkBg>
        <div style={{ margin: D.PX2 }}>
          <CustomMovieGenre>{value.genre}</CustomMovieGenre>
          <div style={{ marginTop: D.PX1 }}>
            <StarIcon sx={{ color: ThemeColor.WHITE }} />
            <StarIcon sx={{ color: ThemeColor.WHITE }} />
            <StarIcon sx={{ color: ThemeColor.WHITE }} />
            <StarIcon sx={{ color: ThemeColor.WHITE }} />
            <StarIcon sx={{ color: ThemeColor.WHITE }} />
          </div>
          <CustomMovieName>{value.name}</CustomMovieName>
        </div>
      </CustomDarkBg>
    </CustomContainer>
  );
};

export default memo(MovieItem);
