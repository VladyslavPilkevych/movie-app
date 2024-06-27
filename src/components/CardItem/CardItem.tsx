import React from 'react';
import { DistanceEnum } from '../../assets/styles';
import {
  CustomContainer,
  CustomDarkBg,
  CustomDivMoreInfo,
  CustomIcon,
  CustomMovieName,
} from './CardItem.style';
import { IBaseCardData } from './types';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { LocalDate } from 'js-joda';

interface HeaderCarouselItemsProps {
  cardInformation?: IBaseCardData;
  height?: number;
}

const CardItem: React.FC<HeaderCarouselItemsProps> = ({
  cardInformation,
  height,
}) => {
  return (
    <CustomContainer
      style={cardInformation?.posterPath ? {
        backgroundImage: `url(${cardInformation?.posterPath})`,
        height: height,
      } : {}}
    >
      <CustomDarkBg>
        <div style={{ margin: DistanceEnum.PX2 }}>
          <CustomDivMoreInfo>
            <CustomIcon>
              {true ? (
                <StarIcon fontSize={'large'} />
              ) : (
                <StarBorderIcon fontSize={'large'} />
              )}
            </CustomIcon>
            <p>{`Language: ${cardInformation?.originalLanguage?.toUpperCase()}`}</p>
            <br />
            {typeof cardInformation?.adult === 'boolean' && (
              <p>{`Age: ${cardInformation?.adult ? '18+' : '6+'}`}</p>
            )}
            {cardInformation?.releaseDate && (
              <p>{LocalDate.parse(cardInformation?.releaseDate?.toString())?.year()}</p>
            )}
            <CustomMovieName>{cardInformation?.name}</CustomMovieName>
          </CustomDivMoreInfo>
        </div>
      </CustomDarkBg>
    </CustomContainer>
  );
};

export default React.memo(CardItem);
